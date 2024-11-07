<script setup lang="ts">
import MainVisual from '@/components/HomePage/MainVisual.vue';
import AboutView from '@/components/HomePage/AboutView.vue';
import Experience from '@/components/HomePage/Experience.vue';
import Skills from '@/components/HomePage/Skills.vue';
import Projects from '@/components/HomePage/Projects.vue';
import Education from '@/components/HomePage/Education.vue';
import Contact from '@/components/HomePage/Contact.vue'
import { useHead } from '@unhead/vue';

useHead({
  title: "Vue.js Developer",
  meta: [
    { name: "hunky:dory", content: "website" },
    { name: "description", content: "This is the Vue.js developer Portfolio!" },
    { name: "keyword", content: "Oleh, Vue.js dev, Vue.js developer, Portfolio, developer portfolio" },
  ],
})
</script>

<template>
  <main class="px-4 mx-auto lg:w-[75%]">
    <main-visual />
    <about-view />
    <experience />
    <skills />
    <projects />
    <education />
    <contact />
  </main>
</template>
