<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchProducts } from '@/api/products/product.service.ts'; // Adjust the path if necessary

const products = ref([]);

onMounted(async () => {
  try {
    const data = await fetchProducts();
    products.value = data;
    console.log('Fetched Products:', data); // Log the fetched data to the console
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
</script>

<template>
  <div>
    <h1>Product Page</h1>
    <div v-if="products.length">
      <div v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.subtitle }}</p>
        <p>Price: ${{ product.price }}</p>
      </div>
    </div>
    <p v-else>No products found.</p>
  </div>
</template>
