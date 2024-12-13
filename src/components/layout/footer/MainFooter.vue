<template>
  <footer class="bg-gray-100">
    <div
      class="mx-auto grid grid-cols-1 gap-6 py-12 pl-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:max-w-screen-lg 2xl:max-w-screen-xl"
    >
      <FooterList
        title="Company Info"
        :links="[
          { label: 'About Us', href: '#' },
          { label: 'Carrier', href: '#' },
          { label: 'We are hiring', href: '#' },
          { label: 'Blog', href: '#' }
        ]"
      />
      <FooterList
        title="Legal"
        :links="[
          { label: 'About Us', href: '#' },
          { label: 'Carrier', href: '#' },
          { label: 'We are hiring', href: '#' },
          { label: 'Blog', href: '#' }
        ]"
      />
      <FooterList
        title="Features"
        :links="[
          { label: 'Business Marketing', href: '#' },
          { label: 'User Analytics', href: '#' },
          { label: 'Live Chat', href: '#' },
          { label: 'Unlimited Support', href: '#' }
        ]"
      />
      <FooterList
        title="Resources"
        :links="[
          { label: 'iOS & Android', href: '#' },
          { label: 'Watch a Demo', href: '#' },
          { label: 'Customers', href: '#' },
          { label: 'API', href: '#' }
        ]"
      />

      <div>
        <hr class="block xl:hidden" />
        <h3 class="mb-4 mt-4 text-lg font-semibold text-gray-800 md:mt-0">Get In Touch</h3>
        <ul class="space-y-2 font-bold text-light-gray">
          <li>
            <a href="tel:4805550103" class="flex items-center hover:text-gray-800" aria-label="Call us at (480) 555-0103">
              <img :src="ContactIcon" alt="Contact icon" class="mr-3 h-5 w-5" loading="lazy" decoding="async" /> (480) 555-0103
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center hover:text-gray-800"
              aria-label="Our location: 4577 Washington Ave. Manchester, Kentucky 39495"
            >
              <img :src="LocationIcon" alt="Location icon" class="mr-3 h-5 w-5" loading="lazy" decoding="async" />4577 Washington Ave.
              Manchester, Kentucky 39495
            </a>
          </li>
          <li>
            <a
              href="mailto:debra.holt@example.com"
              class="flex items-center hover:text-gray-800"
              aria-label="Email us at debra.holt@example.com"
            >
              <img :src="EmailIcon" alt="Email icon" class="mr-3 h-5 w-5" loading="lazy" decoding="async" />
              debra.holt@example.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-gray-200 py-6">
      <div
        class="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row xl:max-w-screen-lg 2xl:max-w-screen-xl"
      >
        <p class="text-sm font-bold text-gray-600"> Made With ❤️ By Figmaland All Rights Reserved </p>
        <ul class="flex gap-4">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              <img :src="FacebookIcon" alt="Facebook icon" class="h-5 w-5 cursor-pointer" loading="lazy" decoding="async" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
              <img :src="InstagramIcon" alt="Instagram icon" class="h-5 w-5 cursor-pointer" loading="lazy" decoding="async" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
              <img :src="TwitterIcon" alt="Twitter icon" class="h-5 w-5 cursor-pointer" loading="lazy" decoding="async" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import InstagramIcon from '@/assets/instagram.svg'
import FacebookIcon from '@/assets/facebook.svg'
import TwitterIcon from '@/assets/twitter.svg'
import ContactIcon from '@/assets/contact.svg'
import EmailIcon from '@/assets/email.svg'
import LocationIcon from '@/assets/location.svg'
import FooterList from './FooterList.vue'
</script>
