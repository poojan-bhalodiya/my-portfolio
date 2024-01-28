<template>
  <div class="bg-primary w-1/5 h-screen text-white p-2">
    <div class="">
      <!-- Branding -->
      <div>Header</div>

      <!-- Navigations -->
      <div></div>

      <!-- Social Profile -->
      <div>Social Profile</div>

      <!-- Application Version -->
      <div>Version : {{ version }}</div>
    </div>
  </div>
</template>
<script setup>
import { version } from "@/package.json";
</script>
