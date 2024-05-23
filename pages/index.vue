<template>
  <ClientOnly>
    <div
      class="w-full flex mx-auto lg:pr-4 lg:pl-14 h-full gap-4 [&::-webkit-scrollbar]:hidden"
    >
      <ProductsList />

      <div
        v-if="isDesktop"
        class="bg-white/5 rounded-3xl py-6 px-4 w-1/3 backdrop-blur-2xl ring-1 ring-white/20 shadow-secondary/20 shadow-md"
      >
        <!-- PROFILE OVERVIEW -->
        <ProfileOverview />
        <!-- TRENDING SECTIONS -->
        <TrendingSections />
        <!-- TRENDING SERVICES -->
        <TrendingServices />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
  layout: "dashboard",
});
</script>
