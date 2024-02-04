<template>
  <div
    class="w-full border-b border-clay-400 flex md:hidden sticky top-0 bg-primary z-40"
  >
    <button
      @click="openSidebar"
      class="flex items-center justify-center h-11 w-11 border-r border-clay-400"
    >
      <Icon name="formkit:open" class="text-3xl" />
    </button>

    <div class="flex items-center justify-center w-full capitalize">{{ route.name }}</div>
  </div>
</template>
<script setup>
const route = useRoute();
const { $event } = useNuxtApp();
function openSidebar() {
  $event("toggle-sidebar");
}
</script>
