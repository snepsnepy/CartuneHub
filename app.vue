<template>
  <div class="bg-black/80">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  setViewportWidth();
});
</script>
