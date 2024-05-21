import { defineStore } from "pinia";

export const useMainStore = defineStore("main", () => {
  const isSidebarOpened = ref(false);
  const windowWidth = ref(0);

  const toggleSidebar = () => {
    isSidebarOpened.value = !isSidebarOpened.value;
  };

  return { isSidebarOpened, toggleSidebar, windowWidth };
});
