<template>
  <div>
    <header class="z-50 sticky top-0">
      <MainNavigation />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <MainFooter />
    </footer>
  </div>
</template>
<script setup lang="ts">
import MainNavigation from '@/components/layout/menu/MainNavigation.vue'
import MainFooter from '@/components/layout/footer/MainFooter.vue'
</script>
