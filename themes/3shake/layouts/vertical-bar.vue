<template>
  <div class="slidev-layout vertical-bar-layout">
    <img class="logo" :src="logoBlack" alt="3-SHAKE" />
    <div class="content">
      <slot />
      <div class="chart-container">
        <div class="chart-area">
          <div class="bars-wrapper">
            <div v-for="(item, i) in items" :key="i" class="bar-col">
              <div class="bar-value-label"
                   :style="{ color: isMax(item.value) ? accentColor : '#6b6b6b' }">
                {{ item.value }}
              </div>
              <div class="bar-track">
                <div class="bar-fill"
                     :style="{
                       height: barHeight(item.value) + '%',
                       backgroundColor: isMax(item.value) ? accentColor : barColorHex
                     }">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Baseline -->
        <div class="baseline"></div>
        <!-- X-axis labels -->
        <div class="x-labels">
          <div v-for="(item, i) in items" :key="'l-' + i" class="bar-label">
            {{ item.label }}
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
  highlightColor: { type: String, default: '' },
  baseColor: { type: String, default: '' },
})

const accentColor = props.highlightColor || '#2aa87f'
const barColorHex = props.baseColor || '#aab0b8'

const maxValue = computed(() => Math.max(...props.items.map(i => i.value)))

const isMax = (val) => val === maxValue.value

const barHeight = (val) => {
  if (maxValue.value <= 0) return 0
  return (val / maxValue.value) * 100
}
</script>

<style scoped>
.vertical-bar-layout {
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

.chart-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chart-area {
  flex: 1;
  position: relative;
}

.bars-wrapper {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 24px;
  padding: 0 20px;
}

.bar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 120px;
  height: 100%;
}

.bar-value-label {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
  flex-shrink: 0;
}

.bar-track {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
}

.bar-fill {
  width: 100%;
  border-radius: 4px 4px 0 0;
  transition: height 0.6s ease;
  min-height: 8px;
}

.baseline {
  width: 100%;
  height: 2px;
  background-color: #999;
  flex-shrink: 0;
}

.x-labels {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 10px 20px 0;
}

.bar-label {
  flex: 1;
  max-width: 120px;
  font-size: 16px;
  color: var(--color-gray);
  text-align: center;
}

.page-number {
  font-size: 16px;
  color: var(--color-gray);
  position: absolute;
  bottom: 16px;
  right: 32px;
}
</style>
