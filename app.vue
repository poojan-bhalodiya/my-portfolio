<template>
  <div class="bg-secondary text-white">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <div class="main-section">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(2px);
}
</style>
