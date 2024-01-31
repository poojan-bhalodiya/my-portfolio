<template>
  <div>
    <h1 class="text-center text-2xl">All Projects</h1>
    <div>Listing of all projects</div>
    <div>Project Card</div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const allProjects = ref([
  {
    title: "",
    small_description: "",
    thumbnail: "",
    tags: "",
    slug: "",
    date: "",
  },
]);
</script>
