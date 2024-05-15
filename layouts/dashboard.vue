<template>
  <div>
    <Sidebar />
    <slot />
  </div>
</template>
import

<script setup lang="ts">
enum Routes {
  HOME = "/",
  PRODUCTS = "/Products",
}

const route = useRoute();
const routeName = ref("");

// Needed to save routeName to keep the active state after page refresh
onMounted(() => {
  routeName.value = route.fullPath;
});

watch(
  () => route.fullPath,
  () => {
    routeName.value = "";
  }
);
</script>

<style scoped>
:where(
    .menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)
  ):not(summary, .active, .btn):focus {
  @apply bg-black/15 text-primary font-bold;
}
</style>
