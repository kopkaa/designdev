<template>
  <div class="mx-auto grid h-full grid-cols-1 gap-12 pl-8 pt-24 md:grid-cols-2 md:items-center md:pl-28 md:pt-10 2xl:pt-0">
    <article class="pl-0 md:mb-32 md:pl-12">
      <h5 id="hero-subtitle" class="mb-7 text-lg font-bold text-camo"> Welcome </h5>
      <h1 id="hero-heading" class="mb-7 text-4xl font-extrabold !leading-tight text-gray-900 md:text-6xl xl:text-5xl">
        Best Learning <br />
        Opportunities
      </h1>
      <p class="mb-7 max-w-72 text-lg leading-8 text-gray-600 xl:text-xl"> Our goal is to make online education work for everyone </p>
      <div class="flex space-x-4">
        <button
          class="rounded-md bg-camo px-8 text-base font-semibold text-white hover:bg-green-700 md:px-8 md:py-4"
          aria-label="Join us in learning opportunities"
        >
          Join Us
        </button>
        <button
          class="rounded-md border border-camo px-8 py-4 text-base font-semibold text-camo hover:bg-gray-100"
          aria-label="Learn more about our educational platform"
        >
          Learn More
        </button>
      </div>
    </article>

    <div class="relative hidden md:block">
      <img src="@/assets/hero-cover-1.png" alt="Hero image of student" class="relative z-10 h-auto w-full" />
    </div>
  </div>
</template>
