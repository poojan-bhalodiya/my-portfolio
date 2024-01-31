<template>
  <div class="w-full border-b border-yellow-600 flex md:hidden">
    <button
      @click="openSidebar"
      class="flex items-center justify-center h-11 w-11 border-r border-yellow-600"
    >
      <Icon name="formkit:open" class="text-3xl" />
    </button>

    <div class="flex items-center justify-center w-full">Page Title</div>
  </div>
</template>
<script setup>
const { $event } = useNuxtApp();
function openSidebar() {
  $event("toggle-sidebar");
}
</script>
