import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  const isSidebarOpened = ref(false);
  const windowWidth = ref(0);

  const toggleSidebar = () => {
    isSidebarOpened.value = !isSidebarOpened.value;
  };

  return { isSidebarOpened, toggleSidebar, windowWidth };
});

export const isDesktop = computed(() => {
  return useGlobalStore().windowWidth >= 1024;
});

export const setViewportWidth = () => {
  useGlobalStore().windowWidth = window.innerWidth;
  window.onresize = () => {
    useGlobalStore().windowWidth = window.innerWidth;
  };
};
