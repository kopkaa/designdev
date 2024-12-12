<template>
  <nav class="px-8 py-8 bg-soft-pink" role="navigation">
    <div class="max-w-screen-lg flex items-center mx-auto">
      <div class="text-2xl font-bold text-gray-800">Brandname</div>

      <div class="flex space-x-6 ml-24 text-light-gray font-bold">
        <a href="#" class="hover:text-gray-800">Home</a>
        <a href="#" class="hover:text-gray-800">Product</a>
        <a href="#" class="hover:text-gray-800">Pricing</a>
        <a href="#" class="hover:text-gray-800">Contact</a>
      </div>

      <div class="flex ml-auto items-center">
        <a href="#" class="hover:text-green-700 text-camo font-bold">Login</a>
        <button
          type="button"
          class="flex items-center justify-center uppercase px-8 py-4 ml-10 text-white bg-camo hover:bg-green-700 focus:ring-4 focus:outline-none font-semibold text-md rounded-lg"
        >
          Join us
          <svg class="w-6 h-6 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
