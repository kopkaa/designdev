<script setup lang="ts">
import { defineProps } from 'vue'
import { Product } from '@/api/products/product.model'
import StarIcon from '@/assets/star.svg'

const { product } = defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="bg-white border rounded-lg shadow p-4 flex flex-col items-start">
    <img :src="product.image" alt="product image" class="w-32 object-cover mb-4 mx-auto h-48" />
    <h2 class="text-lg font-bold text-left w-full text-gray-800">Product Name</h2>
    <p class="text-gray-800 text-sm text-left w-full mb-2">{{ product.subtitle }}</p>

    <div class="flex items-center mb-2">
      <div class="space-x-1 text-green-500 flex items-center">
        <img v-for="n in 5" :key="n" :src="StarIcon" alt="star icon" class="w-5 h-5" />
      </div>
      <span class="text-gray-800 ml-4">{{ product.rating }}</span>
    </div>

    <a href="#" class="text-sm text-green-600 underline mb-2 font-semibold">{{ product.reviews }} reviews</a>
    <p class="text-xl text-gray-800 mb-6 font-extrabold">${{ product.price }}</p>

    <button class="text-white font-semibold py-2 px-4 rounded-md w-full bg-gradient-to-r from-forest-green to-lime-green"> Add to Cart </button>
  </div>
</template>
