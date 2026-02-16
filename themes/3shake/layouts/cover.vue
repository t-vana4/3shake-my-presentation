<template>
  <div class="slidev-layout cover" :style="coverBgStyle">
    <img class="logo" :src="logoWhite" alt="3-SHAKE" />
    <div class="content">
      <slot />
    </div>
    <p class="copyright">Copyright &copy; 3-shake, Inc. All Rights Reserved.</p>
  </div>
</template>

<script setup>
import logoWhite from '../public/logo-white.png'
import markImg from '../public/mark.png'

const coverBgStyle = {
  backgroundImage: `url(${markImg})`,
}
</script>

<style scoped>
.cover {
  background-color: var(--color-navy);
  background-repeat: no-repeat;
  background-position: right -5% bottom -10%;
  background-size: 100% auto;
  color: var(--color-white);
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
}

.logo {
  position: absolute;
  top: 40px;
  left: 60px;
  width: 200px;
  height: auto;
}

.content :deep(h1) {
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.05em;
  border: none;
  color: var(--color-white);
  padding: 0;
}

.content :deep(h2) {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-white);
  padding: 0;
  border: none;
}

.content :deep(p) {
  font-size: 20px;
  color: var(--color-white);
  margin: 4px 0;
  line-height: 1.6;
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
