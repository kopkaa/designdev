<template>
  <!-- ------------------------HERO SECTION-----------------------  -->
  <section class="bg-pink-50 pb-14 md:min-h-[calc(100vh-7rem)] md:pb-0">
    <HeroComponent />
  </section>

  <!-- ------------------------PACKAGES SECTION-----------------------  -->
  <section class="bg-white px-8 py-16 md:px-0 md:py-40">
    <div class="mx-auto grid grid-cols-1 items-start gap-12 md:grid-cols-2 xl:max-w-screen-lg 2xl:max-w-screen-xl">
      <div>
        <span class="mb-5 block h-1 w-20 bg-red-500"></span>
        <h2 class="mb-8 text-4xl font-bold text-gray-900"> Approadable Packages </h2>
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

  <!-- ------------------------CONTACT SECTION-----------------------  -->
  <section class="bg-soft-pink px-8 py-16 md:px-0 md:py-40">
    <div class="mx-auto xl:max-w-xl 2xl:max-w-screen-2xl">
      <h6 class="text-center text-sm font-bold text-camo">Newsletter</h6>
      <h3 class="mt-2 text-center text-2xl font-bold text-gray-800 sm:text-3xl"> Watch our Courses </h3>
      <p class="mx-auto mt-4 max-w-xl text-center text-base text-light-gray">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
      <form @submit="handleSubmit" class="mt-8 w-full">
        <div class="flex flex-col sm:flex-row">
          <input
            v-model="email"
            placeholder="Your Email"
            class="w-full flex-1 rounded-md xl:rounded-r-none border border-gray-300 px-4 py-3 xl:rounded-r-md"
            aria-label="Enter your email address"
          />
          <button
            type="submit"
            class="mt-4 rounded-md xl:rounded-l-none bg-camo px-6 py-3 font-medium text-white transition hover:bg-green-800 xl:mt-0 xl:rounded-r-md"
          >
            Subscribe
          </button>
        </div>
        <p v-if="emailError" class="mt-2 text-sm text-red-600">{{ emailError }}</p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeroComponent from '@/components/HeroComponent.vue'
import PackageCard from '@/components/PackageCard.vue'
import TelescopeIcon from '@/assets/013-telescope-1.svg'
import BlackboardIcon from '@/assets/012-blackboards.svg'
import { validateEmail } from '@/utils/regex'

const email = ref('')
const emailError = ref('')

const handleSubmit = (event: Event) => {
  event.preventDefault()
  if (!email.value) {
    emailError.value = 'Email is required.'
  } else if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address.'
  } else {
    emailError.value = ''
    alert('Thank you for subscribing!')
  }
}
</script>
