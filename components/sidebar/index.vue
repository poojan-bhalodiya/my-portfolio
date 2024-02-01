<template>
  <div
    class="bg-primary text-white sidebar w-full md:w-[320px] h-full z-50"
    :class="isToggle ? 'absolute md:relative' : 'hidden md:flex '"
  >
    <button
      @click="isToggle = !isToggle"
      class="absolute right-1 top-1 p-2 text-2xl md:hidden"
    >
      <Icon name="material-symbols:close" />
    </button>
    <div class="h-full flex flex-col w-full">
      <!-- Branding -->
      <div
        class="py-4 md:py-12 px-4 text-2xl md:text-4xl font-semibold text-center border-b border-yellow-600"
      >
        <!-- Test App -->
        <span class="text-yellow-600">P</span>oojan Bhalodiya
      </div>
      <div
        class="items-center h-full flex justify-center flex-col"
        @click="isToggle = !isToggle"
      >
        <!-- Navigations -->
        <div class="space-y-4 flex flex-col items-start">
          <NuxtLink
            :to="item.link"
            v-for="item in sidebarNavigations"
            class="border-b hover:border-yellow-600 border-primary transition-all duration-300 p-2 flex items-center justify-center group"
          >
            <Icon
              :name="item.icon"
              class="group-hover:text-yellow-600 h-6 w-6"
            />
            <span class="ml-2">
              {{ item.label }}
            </span>
          </NuxtLink>
        </div>
      </div>
      <!-- Social Profile -->
      <div
        class="py-5 border-b border-yellow-600 px-4 flex items-center justify-center gap-4"
      >
        <NuxtLink
          :to="item.link"
          v-for="item in sidebarSocialLinks"
          target="_blank"
          class=""
        >
          <Icon
            :name="item.icon"
            class="text-xl hover:text-yellow-600 hover:text-2xl transition-all duration-300"
          />
        </NuxtLink>
      </div>
      <!-- Application Version -->
      <div class="border-t border-yellow-600 px-4 py-4 text-center">
        Version : {{ version }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { version } from "@/package.json";
const { $listen } = useNuxtApp();

$listen("toggle-sidebar", () => {
  isToggle.value = !isToggle.value;
});
const isToggle = ref(false);
const sidebarNavigations = [
  {
    icon: "material-symbols:home",
    label: "Home",
    link: "/",
  },
  {
    icon: "mdi:about-circle-outline",
    label: "About",
    link: "/about",
  },
  {
    icon: "ph:bag",
    label: "Work",
    link: "/work",
  },
  {
    icon: "material-symbols:folder-outline",
    label: "Projects",
    link: "/projects",
  },
  {
    icon: "mdi:blog",
    label: "Blogs",
    link: "/blogs",
  },
  {
    icon: "mdi:resume",
    label: "Resume",
    link: "/resume",
  },
  {
    icon: "mdi:school",
    label: "Education",
    link: "/education",
  },
  {
    icon: "mdi:contact",
    label: "Contact",
    link: "/contact",
  },
];
const sidebarSocialLinks = [
  {
    icon: "simple-icons:linktree",
    // name: "linktree",
    link: "https://linktr.ee/PoojanBhalodiya",
  },
  {
    icon: "mdi:linkedin",
    // name: "linedin",
    link: "https://www.linkedin.com/in/poojan-bhalodiya/",
  },
  {
    icon: "mdi:github",
    // name: "github",
    link: "https://github.com/poojan-bhalodiya",
  },
];
</script>
<style>
.router-link-active {
  @apply group-active:bg-yellow-600 text-yellow-600;
}
.sidebar {
  backdrop-filter: blur(30px) saturate(2);
  -webkit-backdrop-filter: blur(30px) saturate(2);
  padding-inline: 0;
  transition: 2.2s cubic-bezier(0.36, -0.01, 0, 0.77);
}
</style>
