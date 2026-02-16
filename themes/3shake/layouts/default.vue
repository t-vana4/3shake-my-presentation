<template>
  <div class="slidev-layout content-slide">
    <img class="logo" :src="logoBlack" alt="3-SHAKE" />
    <div class="content">
      <slot />
    </div>
    <span class="page-number">{{ $slidev.nav.currentPage }}</span>
  </div>
</template>

<script setup>
import logoBlack from '../public/logo-black.png'
</script>

<style scoped>
.content-slide {
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
}

.content :deep(h1) {
  font-size: 34px;
  font-weight: 700;
  margin: 0 0 25px 0;
  padding: 0;
  border-bottom: none;
  color: var(--color-dark-text);
  position: absolute;
  top: 18px;
  left: 40px;
  z-index: 1;
}

.page-number {
  font-size: 16px;
  color: var(--color-gray);
  position: absolute;
  bottom: 16px;
  right: 32px;
}
</style>
