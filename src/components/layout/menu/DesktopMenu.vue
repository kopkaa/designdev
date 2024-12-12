<template>
  <div class="ml-24 hidden space-x-6 font-bold text-gray-700 md:flex">
    <a
      v-for="item in menuItems"
      :key="item.label"
      :href="item.link"
      class="hover:text-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
    >
      {{ item.label }}
    </a>
  </div>
  <div class="ml-auto hidden items-center md:flex">
    <a href="/login" class="font-bold text-camo hover:text-green-700 focus:outline-none focus:ring-4 focus:ring-camo">Login</a>
    <button
      class="text-md animate-pulse-size ml-10 flex items-center justify-center rounded-md bg-camo px-8 py-4 font-semibold uppercase text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      Join us
      <svg class="ml-3 h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </button>
  </div>
</template>
<script lang="ts" setup>
const { menuItems } = defineProps<{ menuItems: { label: string; link: string }[] }>()
</script>
<style scoped>
@keyframes pulse-size {
  0%, 100% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.0875); 
  }
  60% {
    transform: scale(0.98); 
  }
}

.animate-pulse-size {
  animation: pulse-size 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
</style>