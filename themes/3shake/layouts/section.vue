<template>
  <div class="slidev-layout section-divider">
    <div class="content">
      <slot />
    </div>
    <p class="copyright">Copyright &copy; 3-shake, Inc. All Rights Reserved.</p>
  </div>
</template>

<style scoped>
.section-divider {
  background-color: var(--color-gray);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 120px;
  width: 100%;
  height: 100%;
  position: relative;
}

.content :deep(h1) {
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  border: none;
  color: var(--color-white);
  line-height: 1;
}

.content :deep(h2) {
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.10em;
  margin: 30px 0 0 0;
  padding: 0;
  border: none;
  color: var(--color-white);
}

.copyright {
  position: absolute;
  bottom: 30px;
  left: 60px;
  font-size: 10px;
  color: var(--color-copyright);
  margin: 0;
  padding: 0;
  letter-spacing: 0.02em;
}
</style>
