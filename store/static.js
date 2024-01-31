import { defineStore } from "pinia";

export const useStaticStore = defineStore("static", {
  state: () => ({
  }),

  // Getters
  getters: {
    // getsidebarNavigations(state) {
    //   return state.sidebarNavigations;
    // },
    // getsidebarSocialLinks(state) {
    //   return state.sidebarSocialLinks;
    // },
  },

  // Actions
  actions: {},
});
