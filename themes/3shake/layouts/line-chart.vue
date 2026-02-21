<template>
  <div class="slidev-layout line-chart-layout">
    <img class="logo" :src="logoBlack" alt="3-SHAKE" />
    <div class="content">
      <slot />
      <div class="chart-wrapper">
        <!-- Legend (HTML) -->
        <div class="legend">
          <div v-for="(s, si) in chartSeries" :key="'l-' + si" class="legend-item">
            <span class="legend-dot" :style="{ backgroundColor: s.color }"></span>
            <span class="legend-name" :style="{ color: s.color }">{{ s.name }}</span>
          </div>
        </div>
        <!-- Chart area -->
        <div class="chart-box">
          <!-- SVG: lines and dots only -->
          <svg viewBox="0 0 1000 500" preserveAspectRatio="none" class="chart-svg">
            <g v-for="(s, si) in chartSeries" :key="'s-' + si">
              <polyline :points="s.pathStr" fill="none" :stroke="s.color"
                        stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"
                        vector-effect="non-scaling-stroke" />
            </g>
          </svg>
          <!-- Data points + value labels (HTML) -->
          <template v-for="(s, si) in chartSeries" :key="'v-' + si">
            <span v-for="(pt, pi) in s.points" :key="'pt-' + si + '-' + pi"
                  class="data-point"
                  :style="{ left: pt.pctX + '%', top: pt.pctY + '%' }">
              <span class="point-value" :style="{ color: s.color }">{{ pt.value }}</span>
              <span class="point-dot" :style="{ backgroundColor: s.color }"></span>
            </span>
          </template>
        </div>
        <!-- X-axis labels (HTML) -->
        <div class="x-axis">
          <span v-for="(label, li) in labels" :key="'x-' + li"
                class="x-label"
                :style="{ left: xLabelPct(li) + '%' }">
            {{ label }}
          </span>
        </div>
      </div>
    </div>
    <span class="page-number">{{ $slidev.nav.currentPage }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import logoBlack from '../public/logo-black.png'

const props = defineProps({
  labels: { type: Array, default: () => [] },
  series: { type: Array, default: () => [] },
})

const colorMap = {
  green: '#2aa87f',
  dark: '#555555',
  yellow: '#ddac26',
  blue: '#2b9bc2',
  navy: '#011121',
  gray: '#6b6b6b',
}

const resolveColor = (c) => colorMap[c] || c || '#555555'

// SVG coordinate space
const svgW = 1000
const svgH = 500
const padL = 80
const padR = 80
const padT = 40
const padB = 40

const allValues = computed(() => props.series.flatMap(s => s.data))
const dataMax = computed(() => Math.max(...allValues.value))
const dataMin = computed(() => Math.min(...allValues.value))

const yRange = computed(() => {
  const range = dataMax.value - dataMin.value
  const pad = range > 0 ? range * 0.15 : 10
  return { min: dataMin.value - pad, max: dataMax.value + pad }
})

const xSvg = (i) => {
  const n = props.labels.length
  if (n <= 1) return svgW / 2
  return padL + (i / (n - 1)) * (svgW - padL - padR)
}

const ySvg = (val) => {
  const { min, max } = yRange.value
  if (max === min) return svgH / 2
  const normalized = (val - min) / (max - min)
  return padT + (1 - normalized) * (svgH - padT - padB)
}

const chartSeries = computed(() => {
  return props.series.map(s => {
    const color = resolveColor(s.color)
    const points = s.data.map((val, i) => {
      const sx = xSvg(i)
      const sy = ySvg(val)
      return {
        svgX: sx,
        svgY: sy,
        pctX: (sx / svgW) * 100,
        pctY: (sy / svgH) * 100,
        value: val,
      }
    })
    const pathStr = points.map(p => `${p.svgX},${p.svgY}`).join(' ')
    return { name: s.name, color, points, pathStr }
  })
})

const xLabelPct = (i) => (xSvg(i) / svgW) * 100
</script>

<style scoped>
.line-chart-layout {
  color: var(--color-dark-text);
  padding: 100px 80px 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--color-white) 0px,
    var(--color-white) 80px,
    var(--color-light-bg) 80px,
    var(--color-light-bg) 100%
  );
}

.logo {
  position: absolute;
  top: 30px;
  right: 40px;
  width: 120px;
  height: auto;
  z-index: 1;
}

.content {
  margin-top: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content :deep(h1) {
  font-size: 34px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  border-bottom: none;
  color: var(--color-dark-text);
  position: absolute;
  top: 18px;
  left: 40px;
  z-index: 1;
}

.content :deep(p) {
  font-size: 20px;
  color: var(--color-navy);
  margin: 0 0 8px 0;
}

.chart-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.legend {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 8px 0;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.chart-box {
  flex: 1;
  position: relative;
}

.chart-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.data-point {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
}

.point-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  left: -4px;
  top: -4px;
}

.point-value {
  position: absolute;
  bottom: 8px;
  left: 0;
  transform: translateX(-50%);
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.x-axis {
  position: relative;
  height: 28px;
  flex-shrink: 0;
}

.x-label {
  position: absolute;
  transform: translateX(-50%);
  font-size: 14px;
  color: #6b6b6b;
}

.page-number {
  font-size: 16px;
  color: var(--color-gray);
  position: absolute;
  bottom: 16px;
  right: 32px;
}
</style>
