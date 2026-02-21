<template>
  <div class="slidev-layout stacked-bar-layout">
    <img class="logo" :src="logoBlack" alt="3-SHAKE" />
    <div class="content">
      <slot />
      <div class="chart-container">
        <div class="stacked-bar">
          <div v-for="(seg, i) in segments" :key="i" class="bar-segment"
               :style="{ width: seg.pct + '%', backgroundColor: seg.color }">
            <span v-if="seg.pct >= 8" class="segment-label">{{ seg.pct }}%</span>
          </div>
        </div>
        <div class="legend">
          <div v-for="(seg, i) in segments" :key="'l-' + i" class="legend-item">
            <span class="legend-color" :style="{ backgroundColor: seg.color }"></span>
            <span class="legend-text">{{ seg.label }} ({{ seg.pct }}%)</span>
          </div>
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
  items: { type: Array, default: () => [] },
})

const defaultColors = ['#5a6370', '#8c939d', '#b8bec5', '#d0d4d9']

const total = computed(() => props.items.reduce((sum, it) => sum + it.value, 0))

const segments = computed(() => {
  return props.items.map((it, i) => ({
    label: it.label,
    pct: total.value > 0 ? Math.round((it.value / total.value) * 100) : 0,
    color: it.color || defaultColors[i % defaultColors.length],
  }))
})
</script>

<style scoped>
.stacked-bar-layout {
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
  margin: 0 0 12px 0;
}

.chart-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
}

.stacked-bar {
  display: flex;
  height: 56px;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
}

.bar-segment {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}

.segment-label {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-white);
  white-space: nowrap;
}

.legend {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-color {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  flex-shrink: 0;
}

.legend-text {
  font-size: 16px;
  color: var(--color-gray);
}

.page-number {
  font-size: 16px;
  color: var(--color-gray);
  position: absolute;
  bottom: 16px;
  right: 32px;
}
</style>
