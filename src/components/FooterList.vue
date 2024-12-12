<template>
    <div>
      <h3 class="mb-4 text-lg font-semibold">{{ title }}</h3>
      <ul class="space-y-2 text-sm font-bold text-light-gray">
        <li v-for="link in links" :key="link.label">
          <a
            :href="link.href"
            class="hover:text-gray-800"
            :aria-label="`Go to ${link.label}`"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
const { links, title } = defineProps<{
  links: { label: string, href: string}[]
  title: string
}>()
  </script>
  