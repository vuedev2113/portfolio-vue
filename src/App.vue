<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ScrollTopBtn from './components/ScrollTopBtn.vue';
</script>

<template>
  <app-header />
  <router-view />
  <app-footer />
  <scroll-top-btn />
</template>
