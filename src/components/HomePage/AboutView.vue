<template>
  <section id="about" class="py-12 lg:py-16 relative">
    <div class="flex flex-col items-center absolute top-16 -right-8 max-lg:flex-row max-lg:-top-8 max-lg:right-0">
      <h2 class="bg-[#1a1443] w-fit text-white rotate-90 max-lg:rotate-0 p-2 px-5 text-xl rounded-md">
        ABOUT ME
      </h2>
      <span class="h-36 w-[2px] bg-[#1a1443] max-lg:h-[2px] max-lg:w-36" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      <div class="order-2 lg:order-1">
        <h3 class="font-medium mb-5 text-[#16f2b3] text-xl sm:text-lg uppercase">Who I am?</h3>
        <p class="text-gray-200 text-sm lg:text-lg">
          As a Highly skilled Full Stack Developer with over 8+ years of professional experience in developing and
          maintaining web applications, I specialize in building dynamic, high-performance web applications designed to
          meet client-specific needs.<br>
          Passionate about leveraging cutting-edge technologies to deliver scalable, user-centric solutions and solve
          complex problems.
        </p>
      </div>
      <div class="flex order-1 lg:order-2 justify-center items-center">
        <img alt="Oleh Zamryha" width="270" height="295" loading="lazy" decoding="async"
          class="rounded-lg max-w-60 w-[240px] h-auto inline transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          src="/profile-1.webp" />
      </div>
    </div>
  </section>
</template>
