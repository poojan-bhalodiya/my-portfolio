<template>
  <div>
    <NuxtLink :to="route">{{ label }}</NuxtLink>
  </div>
</template>
<script setup>
const props = defineProps({
  route: {
    type: String,
    default: "/",
  },
  label: {
    type: String,
    default: "Home",
  },
});
</script>
