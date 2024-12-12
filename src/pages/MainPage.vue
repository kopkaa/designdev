<script setup lang="ts">
import HeroComponent from '@/components/HeroComponent.vue'
import PackageCard from '@/components/PackageCard.vue';
import TelescopeIcon from '@/assets/013-telescope-1.svg'
import BlackboardIcon from '@/assets/012-blackboards.svg'
</script>

<template>
  <!-- ------------------------HERO SECTION-----------------------  -->
  <section class="bg-pink-50 h-full">
    <HeroComponent />
  </section>

  <!-- ------------------------PACKAGES SECTION-----------------------  -->
  <section class="py-40 bg-white">
    <div class="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div>
        <span class="block w-20 h-1 bg-red-500 mb-5"></span> 
        <h2 class="text-4xl font-bold text-gray-900 mb-8 relative"> Approadable Packages </h2>
        <p class="text-light-gray mb-6 text-sm">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
        <a href="#" class="text-camo font-semibold hover:underline"> Learn More → </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <PackageCard 
          :icon="BlackboardIcon" 
          title="Certified Teacher" 
          description="The gradual accumulation of information about." 
        />
        <PackageCard 
          :icon="TelescopeIcon" 
          title="Expert Instruction" 
          description="The gradual accumulation of information about." 
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add custom styles here if necessary */
</style>
