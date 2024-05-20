import { defineStore } from "pinia";

export const useMainStore = defineStore("main", () => {
  const isSidebarOpened = ref(false);

  const toggleSidebar = () => {
    isSidebarOpened.value = !isSidebarOpened.value;
  };

  return { isSidebarOpened, toggleSidebar };
});
