<template>
  <div class="bg-primary w-1/5 min-w-72 text-white">
    <div class="h-full flex flex-col">
      <!-- Branding -->
      <div
        class="py-12 px-4 text-4xl font-semibold text-center border-b border-yellow-600"
      >
        <span class="text-yellow-600">P</span>oojan Bhalodiya
      </div>
      <div class="items-center h-full flex justify-center flex-col">
        <!-- Navigations -->
        <div class="py-4 border-b border-yellow-600 px-4">Link</div>
      </div>
      <!-- Social Profile -->
      <div class="py-4 border-b border-yellow-600 px-4 flex items-center">
        <button></button>
      </div>
      <!-- Application Version -->
      <div class="border-t border-yellow-600 px-4 py-4 text-center">
        Version : {{ version }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { version } from "@/package.json";
const socialLinks = [
  {
    icon: "",
    name: "linktree",
    link: "",
  },
  {
    icon: "",
    name: "linktree",
    link: "",
  },
];
</script>
