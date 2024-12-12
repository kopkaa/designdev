<script setup lang="ts">
// Add any necessary TypeScript code or imports here if needed
</script>

<template>
  <section class="bg-pink-50 h-full" aria-labelledby="hero-heading">
    <div class="pt-24 md:pt-0 pl-8 md:pl-28 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:items-center h-full">
      <article class="md:mb-32 pl-0 md:pl-12">
        <h5 id="hero-subtitle" class="text-lg text-camo font-bold mb-7">
          Welcome
        </h5>
        <h1
          id="hero-heading"
          class="text-5xl md:text-6xl font-extrabold text-gray-900 !leading-tight mb-7"
        >
          Best Learning <br /> Opportunities
        </h1>
        <p class="text-xl text-gray-600 mb-7 max-w-72 leading-8">
          Our goal is to make online education work for everyone
        </p>
        <div class="flex space-x-4">
          <button
            class="px-8 py-4 bg-camo text-white text-base font-semibold rounded-lg hover:bg-green-700"
            aria-label="Join us"
          >
            Join Us
          </button>
          <button
            class="px-8 py-4 border border-camo text-camo text-base font-semibold rounded-lg hover:bg-gray-100"
            aria-label="Learn more about us"
          >
            Learn More
          </button>
        </div>
      </article>

      <!-- Right Column (Image) -->
      <div class="hidden md:block relative">
        <img
          src="@/assets/hero-cover-1.png"
          alt="Hero image of student"
          class="w-full h-auto relative z-10 rounded-lg"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add custom styles here if necessary */
</style>