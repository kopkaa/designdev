<template>
  <!-- ------------------------HERO SECTION-----------------------  -->
  <section class="bg-pink-50 pb-14 md:min-h-[calc(100vh-7rem)] md:pb-0">
    <HeroComponent />
  </section>

  <!-- ------------------------PACKAGES SECTION-----------------------  -->
  <section class="bg-white px-8 py-16 md:px-0 md:py-40">
    <div class="mx-auto grid grid-cols-1 items-start gap-12 md:max-w-screen-lg md:grid-cols-2 2xl:max-w-screen-xl">
      <div>
        <span class="mb-5 block h-1 w-20 bg-red-500"></span>
        <h2 class="mb-8 text-4xl font-bold text-gray-900"> Approadable Packages </h2>
        <p class="mb-6 text-sm text-light-gray">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
        <a href="#" class="group inline-flex items-center font-semibold text-camo hover:underline">
          Learn More
          <img :src="ArrowIcon" alt="Arrow icon" class="ml-2 h-3 w-3 transition-transform group-hover:translate-x-[5px]" />
        </a>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <PackageCard :icon="BlackboardIcon" title="Certified Teacher" description="The gradual accumulation of information about." />
        <PackageCard :icon="TelescopeIcon" title="Expert Instruction" description="The gradual accumulation of information about." />
      </div>
    </div>
  </section>

  <!-- ------------------------Team SECTION-----------------------  -->
  <section class="px-8 py-16 md:px-0 md:py-40">
    <div class="mx-auto md:max-w-screen-lg 2xl:max-w-screen-xl">
      <h6 class="text-sm font-bold text-camo">Team</h6>
      <h3 class="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl"> Get quality education </h3>
      <p class="mt-4 max-w-md text-base text-light-gray xl:max-w-xl">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>

      <Swiper
        class="mt-28"
        :modules="[Navigation, Pagination, Scrollbar]"
        :slides-per-view="4"
        :space-between="20"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        :breakpoints="{
          340: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 15 },
          1280: { slidesPerView: 4, spaceBetween: 25 }
        }"
      >
        <SwiperSlide v-for="(person, index) in team" :key="index" class="swiper-slide">
          <div class="h-full w-full">
            <TeamCardComponent :image="person.image" :title="person.title" :description="person.description" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>

  <!-- ------------------------CONTACT SECTION-----------------------  -->
  <section class="bg-soft-pink px-8 py-16 md:px-0 md:py-40">
    <div class="mx-auto md:max-w-xl 2xl:max-w-screen-md">
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
            class="w-full flex-1 rounded-md border border-gray-300 px-4 py-3 xl:rounded-r-md xl:rounded-r-none"
            aria-label="Enter your email address"
          />
          <button
            type="submit"
            class="mt-4 rounded-md bg-camo px-6 py-3 font-medium text-white transition hover:bg-green-800 xl:mt-0 xl:rounded-l-none xl:rounded-r-md"
          >
            Subscribe
          </button>
        </div>
        <p
          v-show="emailError"
          class="mt-2 whitespace-nowrap text-sm leading-[1.5] text-red-600"
        >
          {{ emailError }}
        </p>
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
import ArrowIcon from '@/assets/arrow.svg'
import { validateEmail } from '@/utils/regex'
import swal from 'sweetalert'
import TeamCardComponent from '@/components/TeamCardComponent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

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
    swal(
      'Subscribed!',
      `Thank you for subscribing to our newsletter ${email.value}. We'll keep you updated with the latest news and updates!`,
      'success'
    )
  }
}

const team = [
  {
    image: '/images/user-cover-1.png',
    title: 'Julian Jameson',
    description: 'Profession'
  },
  {
    image: '/images/user-cover-2.png',
    title: 'Julian Jameson',
    description: 'Profession'
  },
  {
    image: '/images/user-cover-3.png',
    title: 'Julian Jameson',
    description: 'Profession'
  },
  {
    image: '/images/user-cover-4.png',
    title: 'Julian Jameson',
    description: 'Profession'
  },
  {
    image: '/images/user-cover-1.png',
    title: 'John Doe',
    description: 'Profession'
  },
  {
    image: '/images/user-cover-3.png',
    title: 'Julian Joe',
    description: 'Profession'
  }
]
</script>
