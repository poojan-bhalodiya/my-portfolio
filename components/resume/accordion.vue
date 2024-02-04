import type { Value } from 'sass';
<template>
  <div class="py-4 my-10">
    <button
      class="flex items-center justify-between w-full"
      @click="toggleClick"
    >
      <div class="flex items-center gap-4">
        <Icon :name="icon" class="text-clay-400 text-4xl" />
        <p class="text-clay-400 text-xl md:text-2xl font-bold">{{ title }}</p>
      </div>
      <div>
        <Icon
          name="solar:alt-arrow-up-linear"
          class="text-clay-400 text-4xl transition-all duration-300"
          :class="isOpen ? 'rotate-180' : 'rotate-90'"
        />
      </div>
    </button>

    <div class="mt-6 md:ml-14 ml-7" v-if="isOpen">
      <slot />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const isOpen = ref(false);

const props = defineProps({
  title: {
    type: String,
    default: "Nothing",
  },
  icon: {
    type: String,
    default: "simple-icons:hyperskill",
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

isOpen.value = props.isOpen;

function toggleClick() {
  isOpen.value = !isOpen.value;
}
</script>
<style scoped>
.content {
  transition: all 0.3s ease-in-out;
}
</style>
