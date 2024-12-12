<template>
  <nav class="sticky top-0 z-50 bg-pink-50 px-8 py-8" role="navigation" aria-labelledby="main-navigation">
    <div class="mx-auto flex items-center xl:max-w-screen-lg 2xl:max-w-screen-xl">
      <div class="text-2xl font-bold text-gray-800">Brandname</div>
      <DesktopMenu :menu-items="menuItems"/>
      <MobileMenu :menu-items="menuItems"/>
    </div>
  </nav>
</template>

<script setup lang="ts">
import DesktopMenu from './DesktopMenu.vue';
import MobileMenu from './MobileMenu.vue';


const menuItems = [
  { label: 'Home', link: '#' },
  { label: 'Product', link: '#' },
  { label: 'Pricing', link: '#' },
  { label: 'Contact', link: '#' }
]
</script>
