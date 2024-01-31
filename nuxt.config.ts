// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-gtag"],
  gtag: {
    id: "G-YHWG5TVK7Z",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
