<template>
  <ClientOnly>
    <div
      class="w-full mx-auto py-10 px-16 h-full rounded-3xl overflow-scroll [&::-webkit-scrollbar]:hidden bg-black/70 shadow-2xl"
    >
      <ProductsList />
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
  layout: "dashboard",
});
</script>

<style scoped>
.card {
  @apply bg-black/25;
}
</style>
