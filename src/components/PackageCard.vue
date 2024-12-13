<script setup lang="ts">
import { defineProps } from 'vue'

const { icon, title, description } = defineProps<{
  readonly icon: string
  readonly title: string
  readonly description: string
}>()
</script>

<template>
  <div class="rounded-lg bg-white px-8 py-9 shadow-lg">
    <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-camo py-8">
      <img :src="icon" alt="icon" class="h-5 w-5" />
    </div>
    <h3 class="mb-5 text-lg font-bold text-gray-900"> {{ title }} </h3>
    <span class="mb-5 block h-1 w-8 bg-red-500"></span>
    <p class="text-sm text-light-gray">
      {{ description }}
    </p>
  </div>
</template>
