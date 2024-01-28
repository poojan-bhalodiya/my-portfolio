<template>
  <div class="bg-primary w-1/5 h-screen text-white p-2">
    <div class="">
      <div>Header</div>
      <div>Center</div>
      <div>Social Profile</div>
      <div>Version : {{ version }}</div>
    </div>
  </div>
</template>
<script setup>
import { version } from "@/package.json";
</script>
