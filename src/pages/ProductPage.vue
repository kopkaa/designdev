<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchProducts } from '@/api/products/product.service.ts'
import { Product } from '@/api/products/product.model'
import ProductItem from '@/components/ProductItem.vue'

const products = ref<Product[]>([])

onMounted(async () => {
  try {
    const data = await fetchProducts()
    products.value = data
    console.log('Fetched Products:', data)
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})
</script>

<template>
  <div class="bg-white font-raleway h-full py-8">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold">The Fab 4</h1>

      <div class="flex justify-center mt-4">
        <div class="flex rounded-full overflow-hidden bg-gray-200">
          <button class="px-6 py-3 text-white font-semibold bg-gradient-to-r from-orange-500 to-yellow-500">For Dogs</button>
          <button class="px-6 py-3 text-gray-700 font-semibold">For Humans</button>
        </div>
      </div>
    </div>

    <div class="w-full bg-yellow-200 text-yellow-700 font-semibold text-center py-3 rounded-md mb-8"> Buy multiples original canine or human products </div>

    <div class="container mx-auto px-4">
      <div v-if="products.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <ProductItem v-for="product in products" :key="product.id" :product="product" />
      </div>
      <p v-else class="text-center text-gray-500">No products found.</p>
    </div>
  </div>
</template>
