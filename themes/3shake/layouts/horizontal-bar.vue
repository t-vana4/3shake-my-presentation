<template>
  <div class="slidev-layout horizontal-bar-layout">
    <img class="logo" :src="logoBlack" alt="3-SHAKE" />
    <div class="content">
      <slot />
      <div class="chart-container">
        <div v-for="(item, i) in items" :key="i" class="bar-row">
          <div class="bar-label">{{ item.label }}</div>
          <div class="bar-track">
            <div class="bar-fill"
                 :style="{
                   width: barWidth(item.value) + '%',
                   backgroundColor: isMax(item.value) ? accentColor : barColor
                 }">
              <span class="bar-value">{{ item.value }}</span>
            </div>
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
const barColor = props.baseColor || '#aab0b8'

const maxValue = computed(() => Math.max(...props.items.map(i => i.value)))

const isMax = (val) => val === maxValue.value

const barWidth = (val) => {
  if (maxValue.value <= 0) return 0
  return (val / maxValue.value) * 100
}
</script>

<style scoped>
.horizontal-bar-layout {
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
  margin-top: 16px;
  gap: 20px;
  flex: 1;
  padding: 8px 0;
}

.bar-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.bar-label {
  font-size: 18px;
  font-weight: 500;
  min-width: 80px;
  text-align: right;
  color: var(--color-dark-text);
  flex-shrink: 0;
}

.bar-track {
  flex: 1;
  height: 44px;
  position: relative;
}

.bar-fill {
  height: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
  transition: width 0.6s ease;
  min-width: 50px;
}

.bar-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-white);
}

.page-number {
  font-size: 16px;
  color: var(--color-gray);
  position: absolute;
  bottom: 16px;
  right: 32px;
}
</style>
