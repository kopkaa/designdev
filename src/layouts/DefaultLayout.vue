<template>
  <div>
    <header> 
        <Navigation/>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2024 Simple Vue App</p>
    </footer>
  </div>
</template>
<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
</script>

