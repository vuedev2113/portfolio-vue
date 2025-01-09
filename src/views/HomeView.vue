<script setup lang="ts">
import MainVisual from '@/components/HomePage/MainVisual.vue';
import AboutView from '@/components/HomePage/AboutView.vue';
import Experience from '@/components/HomePage/Experience.vue';
import Skills from '@/components/HomePage/Skills.vue';
import Projects from '@/components/HomePage/Projects.vue';
import Education from '@/components/HomePage/Education.vue';
import Contact from '@/components/HomePage/Contact.vue'
import { useSeoMeta } from '@unhead/vue';

useSeoMeta({
  title: "Full stack Developer",
  description: "This is the Full stack developer Portfolio!",
  keywords: "Oleh, Full stack dev, Full stack developer, Portfolio, developer portfolio",
  author: "Oleh Zamryha",
  ogType: "website",
  ogTitle: "Full stack Developer",
  ogDescription: "This is the Full stack developer Portfolio!",
  ogImage: "/profile-1.webp",
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
