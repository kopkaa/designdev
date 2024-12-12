<script setup lang="ts">
import { defineProps } from 'vue'

const { icon, title, description } = defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="bg-white shadow-lg rounded-lg px-8 py-9">
    <div class="flex items-center justify-center w-16 h-16 py-8 bg-camo rounded-lg mb-4">
      <img :src="icon" alt="icon" class="w-5 h-5" />
    </div>
    <h3 class="text-lg font-bold text-gray-900 mb-5"> {{ title }} </h3>
    <span class="block w-8 h-1 bg-red-500 mb-5"></span>
    <p class="text-light-gray text-sm">
      {{ description }}
    </p>
  </div>
</template>
