export const isDesktop = computed(() => {
  return useMainStore().windowWidth >= 1024;
});
