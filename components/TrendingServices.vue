<template>
  <div>
    <div class="flex m-auto items-center justify-between mt-8">
      <div class="flex w-full">
        <p class="text-md text-base-content">Trending Services</p>
      </div>
      <div
        class="flex m-auto items-center hover:text-primary hover:cursor-pointer w-full justify-end"
      >
        <p class="text-sm text-primary">See all</p>
        <Icon name="ph:caret-right-bold" class="text-primary" />
      </div>
    </div>

    <div class="divider -mt-1 mb-1"></div>
    <div class="flex gap-x-2 overflow-scroll">
      <!-- 1 -->
      <div
        class="hero rounded-3xl w-1/2"
        style="
          background-image: url(https://cdn-fastly.thetruthaboutcars.com/media/2022/09/22/10191/lot-of-rare-jdm-cars-will-likely-draw-deep-pockets-at-auction.jpg?size=1200x628);
        "
      >
        <div class="hero-overlay bg-opacity-70 rounded-3xl"></div>
        <div class="hero-content text-base-content w-full justify-start">
          <div class="w-full">
            <Icon name="emojione-v1:flag-for-romania" />
            <p class="mb-1 text-md font-bold">M Wheels</p>
            <p class="text-xs font-semibold">Wheels & Accessories</p>

            <div class="rating mt-2">
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
                checked
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div
        class="hero rounded-3xl w-1/2"
        style="
          background-image: url(https://cdn-fastly.thetruthaboutcars.com/media/2022/09/22/10191/lot-of-rare-jdm-cars-will-likely-draw-deep-pockets-at-auction.jpg?size=1200x628);
        "
      >
        <div class="hero-overlay bg-opacity-70 rounded-3xl"></div>
        <div class="hero-content text-base-content w-full justify-start">
          <div class="w-full">
            <Icon name="emojione-v1:flag-for-greece" />
            <p class="mb-1 text-md font-bold">Porfiris Autosport</p>
            <p class="text-xs font-semibold">Engine Tuning</p>

            <div class="rating mt-2">
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
                checked
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div
        class="hero rounded-3xl w-1/2"
        style="
          background-image: url(https://cdn-fastly.thetruthaboutcars.com/media/2022/09/22/10191/lot-of-rare-jdm-cars-will-likely-draw-deep-pockets-at-auction.jpg?size=1200x628);
        "
      >
        <div class="hero-overlay bg-opacity-70 rounded-3xl"></div>
        <div class="hero-content text-base-content w-full justify-start">
          <div class="w-full">
            <Icon name="emojione-v1:flag-for-spain" />
            <p class="mb-1 text-md font-bold">Remap Mallorca</p>
            <p class="text-xs font-semibold">Chiptuning</p>

            <div class="rating mt-2">
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-primary"
                checked
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.rating :where(input) {
  @apply w-4 h-4;
}

.hero-content {
  @apply py-1;
}
</style>
