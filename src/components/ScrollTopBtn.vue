<template>
  <button v-if="isVisible" class="scroll-to-top" @click="scrollToTop">
    <svg class="w-10 h-10 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="white" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandLessIcon"><path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
  </button>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
const isVisible = ref(false);
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
const toggleButton = () => isVisible.value = window.scrollY > 300
onMounted(() => window.addEventListener('scroll', toggleButton))
onBeforeUnmount(() => window.removeEventListener('scroll', toggleButton))
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  display: inline-block;
  bottom: 100px;
  right: 20px;
  z-index: 1000;
  background-color: #2196f3;
  color: #FFFFFF;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 20px;
}

@media screen and (max-width: 1024px) {
  .scroll-to-top {
    bottom: 50px;
    width: 40px;
    height: 40px;
    font-size: 15px;
  }
}

.scroll-to-top:hover {
  background-color: #1669c2;
}
</style>