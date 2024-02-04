<template>
  <div class="bg-secondary-950 text-white">
    <NuxtLoadingIndicator :height="2" :duration="1000" />
    <NuxtLayout>
      <div class="main-section h-screen overflow-auto">
        <TopBar />
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});

</script>
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

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
