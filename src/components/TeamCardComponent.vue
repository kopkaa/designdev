<template>
  <div class="rounded-2xl bg-white text-center shadow-lg">
    <div class="overflow-hidden rounded-t-2xl">
      <img :src="image" alt="Image" loading="lazy" decoding="async" class="h-full w-full object-cover" />
    </div>
    <div class="py-8 px-12">
      <h3 class="mt-4 text-lg font-bold text-gray-800">{{ title }}</h3>
      <p class="text-sm text-gray-500">{{ description }}</p>
      <div class="mt-4 flex justify-center space-x-4">
        <a href="#" aria-label="Facebook">
          <img src="/src/assets/facebook.svg" alt="Facebook" class="h-5 w-5" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src="/src/assets/instagram.svg" alt="Instagram" class="h-5 w-5" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src="/src/assets/twitter.svg" alt="Twitter" class="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { image, title, description } = defineProps<{
  readonly image: string
  readonly title: string
  readonly description: string
}>()
</script>
