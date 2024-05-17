<template>
  <ClientOnly>
    <div
      class="w-full flex mx-auto py-10 px-16 h-full gap-4 rounded-3xl overflow-scroll [&::-webkit-scrollbar]:hidden bg-black/70 shadow-2xl"
    >
      <div
        class="bg-white/10 rounded-2xl p-4 w-2/3 overflow-scroll [&::-webkit-scrollbar]:hidden"
      >
        <ProductsList />
      </div>
      <div class="bg-white/10 rounded-2xl p-4 w-1/3"></div>
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
