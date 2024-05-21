<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  useMainStore().windowWidth = window.innerWidth;
  window.onresize = () => {
    useMainStore().windowWidth = window.innerWidth;
  };
});
</script>
