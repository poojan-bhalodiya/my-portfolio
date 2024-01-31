<template>
  <!-- <div>Tech Tags include primary color secondary color label</div> -->
  <button class="p-2 rounded">
    {{ getTagDetail }}
  </button>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "Tag",
  },
});
const allTags = [
  {
    name: "notag",
    label: "No Tag",
    color: "",
  },
  {
    name: "nodejs",
    label: "Node Js",
    color: "",
  },
  {
    name: "expressjs",
    label: "Express Js",
    color: "",
  },
];
function getTagDetail() {
  props.name;
}
</script>
