<script setup lang="ts">
import { educations } from '@/store/store';
</script>

<template>
  <section id="education" class="relative w-full border-t my-12 lg:my-24 border-[#25213b]">
    <img
      alt="Hero"
      class="absolute w-full h-auto"
      loading="lazy"
      decoding="async"
      src="/section.svg"
    />
    <div class="flex justify-center -translate-y-[1px]">
      <div class="w-3/4">
        <div class="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
      </div>
    </div>

    <div class="flex justify-center my-5 lg:py-8">
      <div class="flex  items-center">
        <span class="w-24 h-[2px] bg-[#1a1443]" />
        <h2 class="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          Educations
        </h2>
        <span class="w-24 h-[2px] bg-[#1a1443]" />
      </div>
    </div>

    <div class="py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex justify-center items-start">
          <img alt="Education" width="360" height="338" loading="lazy" decoding="async" src="/education-1.webp" class="w-[360px] h-auto" />
        </div>
        <div class="flex flex-col gap-6">
          <div
            v-for="education in educations"
            :key="education.id"
            class="h-fit cursor-pointer overflow-hidden border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl w-full hover:border-[#8072f8]"
          >
            <div class="p-3 relative">
              <img
                alt="Hero"
                class="absolute bottom-0 opacity-80"
                height="200"
                src="/blur-23.svg"
                width="1080"
              />
              <div class="flex justify-center">
                <p class="text-xs sm:text-sm text-[#16f2b3]">
                  {{ education.duration }}
                </p>
              </div>
              <div class="flex items-center gap-x-8 px-3 py-5">
                <div class="text-violet-500  transition-all duration-300 hover:scale-125">
                  <img alt="education" src="/education.svg" width="36" height="36" />
                </div>
                <div>
                  <p class="text-base sm:text-xl mb-2 font-medium uppercase">
                    {{ education.title }}
                  </p>
                  <p class="text-sm sm:text-base">
                    {{ education.institution }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
