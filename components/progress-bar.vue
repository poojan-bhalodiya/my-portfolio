<template>
  <div :class="`progress ${bgColor}`">
    <div
      v-if="persent"
      :id="id"
      :class="`progress-done bg-gradient-to-l rounded-full ${colorFrom} ${colorTo} ${textColor} w-[${persent}%] text-[10px] opacity-100`"
    >
      {{ persent }}%
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  persent: {
    type: Number,
    default: 75,
  },
  colorFrom: {
    type: String,
    default: "from-clay-400",
  },
  colorTo: {
    type: String,
    default: "to-red-400",
  },
  textColor: {
    type: String,
    default: "text-white",
  },
  bgColor: {
    type: String,
    default: "bg-white",
  },
  id: {
    type: String,
    default: "data-120",
  },
});

// On Mounting...
onMounted(() => {
  setPersent();
});

// set Persentage
function setPersent() {
  const element = document.getElementById(props.id);
  element.style.width = `${props.persent}%`;
}
</script>
<style scoped>
.progress {
  border-radius: 999px;
  position: relative;
  height: 11px;
  width: 80%;
}

.progress-done {
  width: 0%;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: 1s ease 0.3s;
}
</style>
