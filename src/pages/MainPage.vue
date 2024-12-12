<script setup lang="ts">
import HeroComponent from '@/components/HeroComponent.vue'
import PackageCard from '@/components/PackageCard.vue'
import TelescopeIcon from '@/assets/013-telescope-1.svg'
import BlackboardIcon from '@/assets/012-blackboards.svg'
</script>

<template>
  <!-- ------------------------HERO SECTION-----------------------  -->
  <section class="bg-pink-50 pb-14 md:min-h-[calc(100vh-7rem)] md:pb-0">
    <HeroComponent />
  </section>

  <!-- ------------------------PACKAGES SECTION-----------------------  -->
  <section class="bg-white px-8 py-16 md:px-0 md:py-40">
    <div class="mx-auto grid 2xl:max-w-screen-xl xl:max-w-screen-lg grid-cols-1 items-start gap-12 md:grid-cols-2">
      <div>
        <span class="mb-5 block h-1 w-20 bg-red-500"></span>
        <h2 class="relative mb-8 text-4xl font-bold text-gray-900"> Approadable Packages </h2>
        <p class="mb-6 text-sm text-light-gray">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
        <a href="#" class="font-semibold text-camo hover:underline"> Learn More → </a>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <PackageCard :icon="BlackboardIcon" title="Certified Teacher" description="The gradual accumulation of information about." />
        <PackageCard :icon="TelescopeIcon" title="Expert Instruction" description="The gradual accumulation of information about." />
      </div>
    </div>
  </section>

  <!-- ------------------------PACKAGES SECTION-----------------------  -->
  <!-- <section class="bg-white px-8 py-16 md:px-0 md:py-40">
    <div class="mx-auto grid max-w-screen-lg grid-cols-1 items-start gap-12 md:grid-cols-2">
      <div>
        <span class="mb-5 block h-1 w-20 bg-red-500"></span>
        <h2 class="relative mb-8 text-4xl font-bold text-gray-900"> Approadable Packages </h2>
        <p class="mb-6 text-sm text-light-gray">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
        <a href="#" class="font-semibold text-camo hover:underline"> Learn More → </a>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <PackageCard :icon="BlackboardIcon" title="Certified Teacher" description="The gradual accumulation of information about." />
        <PackageCard :icon="TelescopeIcon" title="Expert Instruction" description="The gradual accumulation of information about." />
      </div>
    </div>
  </section> -->
</template>
