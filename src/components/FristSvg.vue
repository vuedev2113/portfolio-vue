<template>
  <img
    alt="Hero"
    class="absolute top-0 w-full h-auto"
    decoding="async"
    src="/hero.svg"
  />
</template>

<script lang="ts">
export default {
  metaInfo: {
    link: [
      {
        rel: "preload",
        href: "/hero.svg",
        as: "image",
      },
    ],
  },
};
</script>
