<template>
  <ClientOnly>
    <div
      class="w-full flex mx-auto lg:pr-4 lg:pl-14 h-full gap-4 [&::-webkit-scrollbar]:hidden"
    >
      <ProductsList />

      <div
        v-if="isDesktop"
        class="bg-black/20 rounded-3xl py-4 px-4 w-1/3 backdrop-blur-2xl ring-1 ring-white/20 shadow-secondary/20 shadow-md"
      >
        <ProfileOverview />

        <!-- POPULAR SECTIONS -->
        <p class="px-2 text-base-content text-md tracking-wider mt-6">
          Popular Sections
        </p>
        <div class="divider m-0"></div>
        <div class="flex flex-col gap-y-2">
          <div
            class="hero rounded-3xl"
            style="
              background-image: url(https://cdn-fastly.thetruthaboutcars.com/media/2022/09/22/10191/lot-of-rare-jdm-cars-will-likely-draw-deep-pockets-at-auction.jpg?size=1200x628);
            "
          >
            <div class="hero-overlay bg-opacity-70 rounded-3xl"></div>
            <div class="hero-content text-base-content w-full justify-start">
              <div class="w-full">
                <h1 class="mb-2 text-md font-bold">Cars Marketplace</h1>

                <div class="flex m-auto items-center justify-between">
                  <div class="flex w-full">
                    <p class="text-sm">127 listings</p>
                  </div>
                  <div
                    class="flex m-auto items-center hover:text-primary hover:cursor-pointer w-full justify-end"
                  >
                    <p class="text-sm">See all</p>
                    <Icon name="ph:caret-right-bold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hero rounded-3xl"
            style="
              background-image: url(https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1c0f96e3-c285-493c-a596-e9873a07ea0d/SABUKARU_RWB_AKIRA_NAKAI_PORSCHE_64.jpg);
            "
          >
            <div class="hero-overlay bg-opacity-70 rounded-3xl"></div>
            <div class="hero-content text-base-content w-full justify-start">
              <div class="w-full">
                <h1 class="mb-2 text-md font-bold">Parts Marketplace</h1>

                <div class="flex m-auto items-center justify-between">
                  <div class="flex w-full">
                    <p class="text-sm">410 listings</p>
                  </div>
                  <div
                    class="flex m-auto items-center hover:text-primary hover:cursor-pointer w-full justify-end"
                  >
                    <p class="text-sm">See all</p>
                    <Icon name="ph:caret-right-bold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hero rounded-3xl"
            style="
              background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);
            "
          >
            <div class="hero-overlay bg-opacity-70 rounded-3xl"></div>
            <div class="hero-content text-base-content w-full justify-start">
              <div class="w-full">
                <h1 class="mb-2 text-md font-bold">Merchandise</h1>

                <div class="flex m-auto items-center justify-between">
                  <div class="flex w-full">
                    <p class="text-sm">6 stores</p>
                  </div>
                  <div
                    class="flex m-auto items-center hover:text-primary hover:cursor-pointer w-full justify-end"
                  >
                    <p class="text-sm">See all</p>
                    <Icon name="ph:caret-right-bold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

<style scoped>
.card {
  @apply bg-black/25;
}
</style>
