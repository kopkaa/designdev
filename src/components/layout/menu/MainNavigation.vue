<template>
  <nav
    class="bg-pink-50 px-8 py-8 w-full sticky top-0 transition-all duration-300"
    :data-scrolled="isScrolled"
    role="navigation"
    aria-labelledby="main-navigation"
  >
    <div class="mx-auto flex items-center xl:max-w-screen-lg 2xl:max-w-screen-xl">
      <div class="text-2xl font-bold text-gray-800">Brandname</div>
      <DesktopMenu :menu-items="menuItems" />
      <MobileMenu :menu-items="menuItems" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useScroll } from '@vueuse/core';
import DesktopMenu from './DesktopMenu.vue';
import MobileMenu from './MobileMenu.vue';

const menuItems = [
  { label: 'Home', link: '#' },
  { label: 'Product', link: '#' },
  { label: 'Pricing', link: '#' },
  { label: 'Contact', link: '#' },
];

const { y } = useScroll(window);
const isScrolled = computed(() => y.value > 10);
</script>

<style scoped>
nav[data-scrolled="true"] {
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
