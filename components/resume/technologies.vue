<template>
  <div class="my-3">
    <p class="flex items-center justify-start gap-2">
      <Icon :name="icon" :class="`text-xl`" />
      <span>{{ label }}</span>
    </p>
    <ProgressBar
      class="mt-1"
      :color-from="colorFrom"
      :color-to="colorTo"
      :persent="persentage"
      bg-color="bg-secondary-900"
      :id="`${label}-${persentage}`"
    />
  </div>
</template>
<script setup>
const { persentage, colorFrom, colorTo, label, icon } = defineProps({
  persentage: {
    type: Number,
    default: 75,
  },
  colorFrom: {
    type: String,
    default: "from-clay-400",
  },
  colorTo: {
    type: String,
    default: "to-white",
  },
  label: {
    type: String,
    default: "SQL",
  },
  icon: {
    type: String,
    default: "mdi:database",
  },
});
</script>
