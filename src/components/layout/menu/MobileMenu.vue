<template>
  <button class="ml-auto flex text-gray-700 md:hidden" aria-label="Toggle navigation menu" :aria-expanded="isMenuOpen" @click="toggleMenu">
    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  </button>

  <div v-if="isMenuOpen" class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90 text-white">
    <button class="absolute right-4 top-4 text-white" aria-label="Close navigation menu" @click="toggleMenu">
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <ul class="flex flex-col space-y-8 self-start pl-8 text-lg font-bold uppercase">
      <li v-for="item in menuItems" :key="item.label">
        <a :href="item.link" class="hover:text-gray-300">{{ item.label }}</a>
      </li>
      <hr />
      <div class="flex items-center">
        <a href="/login" class="font-bold text-camo hover:text-green-700 focus:outline-none focus:ring-4 focus:ring-camo">Login</a>
        <button
          type="button"
          class="text-md ml-10 flex items-center justify-center rounded-md bg-camo px-4 py-2 font-semibold uppercase text-white"
          aria-label="Join us"
        >
          Join us
          <svg class="ml-3 h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const { menuItems } = defineProps<{ menuItems: { label: string; link: string }[] }>()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
