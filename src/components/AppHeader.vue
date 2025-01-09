<script setup lang="ts">
import { navs } from '@/store/store';
import MobileNav from './MobileNav.vue';
</script>

<template>
  <header class="sticky py-4 px-4 top-0 shadow z-50">
    <div class="flex mx-auto justify-between lg:max-w-[1200px]">
      <router-link class="flex items-center gap-2" to="/">
        <img src="/small-avatar.webp" alt="oleh" width="48" height="48" class="w-[48px] h-[48px] rounded-full" />
        <h2 class="font-weight-bold">Oleh Zamryha</h2>
      </router-link>
      <mobile-nav />
      <nav class="flex justify-center items-center gap-4 max-md:hidden">
        <router-link v-for="nav, i in navs" :key="i" :to="nav.to">
          {{ nav.title }}
        </router-link>
      </nav>
    </div>
  </header>
</template>