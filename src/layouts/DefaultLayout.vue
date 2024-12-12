<template>
  <div class="h-full">
    <header> 
        <Navigation/>
    </header>
    <main class="h-full">
      <router-view />
    </main>
    <!-- <footer>
      <p>© 2024 Simple Vue App</p>
    </footer> -->
  </div>
</template>
<script setup lang="ts">
import Navigation from '@/components/MainNavigation.vue'
</script>

