<script lang="ts" setup>
  import { ref } from 'vue';
  import { navs } from '@/store/store';
  const isOpen = ref(false)
  const toggleDropdown = () => isOpen.value = !isOpen.value
  const closeDropdown = () => isOpen.value = false
</script>

<template>
  <div class="hidden max-md:block">
    <button @click="toggleDropdown" class="text-3xl">&equiv;</button>
    <div v-if="isOpen" @mouseleave="closeDropdown" class="bg-slate-900 pushdown w-max h-max fixed right-0 top-0 z-10 p-6 flex flex-col gap-4">
      <div class="overflow-hidden">
        <button @click="closeDropdown" class="text-3xl float-right">&Cross;</button>
      </div>
      <router-link v-for="nav, i in navs" :key="i" :to="nav.to">
        {{ nav.title }}
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.pushdown {
  animation: pushdown 1s forwards cubic-bezier(0.075, 0.82, 0.165, 1);
}
@keyframes pushdown {
  from {
    top: -100%;
  }
  to {
    top: 0;
  }
}
</style>
