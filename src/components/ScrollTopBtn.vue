<template>
  <button v-if="isVisible" class="scroll-to-top" @click="scrollToTop">&#129129;</button>
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

.scroll-to-top:hover {
  background-color: #1669c2;
}
</style>