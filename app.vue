<template>
  <div class="bg-secondary-950 text-white" v-if="!isLoading">
    <div v-if="isHidePortfolio">
      <div
        class="flex-col space-y-4 h-screen flex items-center justify-center text-4xl font-extrabold text-center underline"
      >
        <p class="animate-bounce">Currently Site is Down</p>
        <p class="text-sm">Contact Developer for more info</p>
      </div>
    </div>
    <div v-else class="portfolio-app">
      <NuxtLoadingIndicator :height="2" :duration="1000" />
      <NuxtLayout>
        <div class="h-screen overflow-y-auto flex flex-col">
          <TopBar />
          <NuxtPage class="mb-16" />
        </div>
      </NuxtLayout>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const isHidePortfolio = ref(false);
const isLoading = ref(true);
const downtime = ref(new Date("2025-03-28T11:58:00"));
const remainingHours = ref(0);

onMounted(() => {
  AOS.init();
  document.body.classList.add("overflow-hidden");

  const currentTime = new Date();
  if (currentTime > downtime.value) {
    isHidePortfolio.value = true;
  } else {
    const timeDiff = downtime.value - currentTime;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    remainingHours.value = { hours, minutes };
  }
  isLoading.value = false;
  console.log("Remaining time is : ", remainingHours.value);
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
