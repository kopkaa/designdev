<template>
  <div class="bg-white border rounded-lg shadow p-4 flex flex-col items-start">
    <img :src="product.image" alt="Product image" class="w-32 object-cover mb-4 mx-auto" />
    <h2 class="text-lg font-bold text-left w-full text-gray-800">Product Name</h2>
    <p class="text-gray-800 text-sm text-left w-full mb-2">{{ product.subtitle }}</p>
    
    <div class="flex items-center space-x-1 text-green-500 mb-2">
      <span class="text-green-600">⭐⭐⭐⭐⭐</span>
      <span class="text-gray-800">{{ product.rating }}</span>
    </div>
    
    <a href="#" class="text-sm text-green-600 underline mb-2">{{ product.reviews }} reviews</a>
    <p class="text-xl font-semibold mb-4 text-gray-800">${{ product.price }}</p>
    
    <button class="mt-auto text-white font-semibold py-2 px-4 rounded-md w-full bg-gradient-to-r from-forest-green to-lime-green">
      Add to Cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Product } from '@/api/products/product.model'

const props = defineProps<{
  product: Product
}>()
</script>
