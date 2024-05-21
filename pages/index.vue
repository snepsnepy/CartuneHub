<template>
  <ClientOnly>
    <div
      class="w-full flex mx-auto lg:pr-4 lg:pl-14 h-full gap-4 [&::-webkit-scrollbar]:hidden"
    >
      <ProductsList />

      <div
        v-if="isDesktop"
        class="bg-black/20 rounded-3xl w-1/3 backdrop-blur-2xl ring-1 ring-white/20 shadow-secondary/20 shadow-md"
      ></div>
    </div>
  </ClientOnly>
</template>

<script setup>
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
