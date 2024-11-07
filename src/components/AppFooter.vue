<template>
  <footer class="px-8 sm:px-4 py-4 flex items-center justify-between shadow">
    <div class="flex gap-4">
      <a
        v-for="item in items"
        :key="item.title"
        :href="item.href"
        target="_blank"
        :title="item.title"
      >
        <img :alt="item.title" :src="item.icon" width="24" height="24" />
      </a>
    </div>
    <div class="text-disabled">
      &copy; 2020-{{ (new Date()).getFullYear() }} <span class="hidden sm:inline-block">Created By <span class="text-[#16f2b3]">Oleh</span></span>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const items = [
    {
      title: 'Vuetify Documentation',
      icon: '/logo.svg',
      href: 'https://vuetifyjs.com/',
    },
    {
      title: 'Oleh\'s Linkedin',
      icon: '/linkedin.svg',
      href: 'https://www.linkedin.com/in/oleh-zamryha-b47960330/',
    },
    {
      title: 'Oleh\'s GitHub',
      icon: '/github.svg',
      href: 'https://github.com/vuedev2113',
    },
    {
      title: 'greatlancer_90180',
      icon: '/discord.svg',
      href: 'https://discord.com/channels/@me',
    },
  ]
</script>