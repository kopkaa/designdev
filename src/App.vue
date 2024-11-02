<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
console.log('HOJ')
</script>

<template>
  <div class="mx-auto container min-h-screen flex flex-col justify-center items-center p-2">
    <img alt="Vue logo" src="./assets/vue.svg" />
    <p v-html="'cc'"></p>
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
