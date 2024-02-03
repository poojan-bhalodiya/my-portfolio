<template>
  <div>
    <NuxtLayout>
      <div
        class="w-full flex flex-col items-center justify-center bg-secondary-950 text-white h-full"
      >
        <h1 class="text-4xl sm:text-5xl font-bold">404</h1>
        <h3 class="py-2 sm:py-2.5 text-2xl md:text-3xl">
          Sorry we couldn't find this page.
        </h3>
        <p class="py-2 sm:py-2.5 mb-4 sm:mb-6 text-center">
          But don't worry, you can find plenty of other things on our homepage.
        </p>
        <NuxtLink
          class="border-clay-400 border p-4 rounded hover:ring ring-clay-400 transition-all duration-300"
          to="/"
        >
          Go Home
        </NuxtLink>
      </div>
    </NuxtLayout>
  </div>
</template>
