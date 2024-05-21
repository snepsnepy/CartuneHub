<template>
  <!-- Title -->
  <section class="flex px-2 lg:px-0 flex-col w-full lg:w-2/3">
    <div class="flex pt-4 lg:pt-0 mb-4">
      <!-- Title & Description -->
      <div class="w-full flex items-center my-auto">
        <p
          class="font-sans text-md lg:text-2xl font-bold text-base-content h-full"
        >
          Parts Marketplace
        </p>
      </div>

      <!-- Search bar -->
      <div class="w-full flex items-center">
        <Input
          type="text"
          placeholder="Search items.."
          v-model:value="filter"
          class="w-full h-12 inline-flex items-center rounded-xl backdrop-blur-2xl"
        />
      </div>
    </div>
    <div
      class="rounded-3xl p-4 overflow-scroll h-full [&::-webkit-scrollbar]:hidden backdrop-blur-2xl ring-1 ring-white/20 shadow-secondary/20 shadow-lg"
    >
      <!-- Search -->
      <!-- <div class="w-full mt-10 mb-10">
    
  </div> -->

      <!-- List wrapper -->
      <div class="relative">
        <!-- Placeholder -->
        <div v-if="sortedItems?.length === 0">
          <div
            class="text-center max-w-sm mx-auto flex items-center justify-center py-24"
          >
            <div>
              <Icon name="et:layers" class="w-12 h-12 mb-4 text-base-content" />
              <h3 class="font-sans text-lg text-base-content">
                No items found
              </h3>
              <p class="text-sm text-base-content">
                We couldn't find any items matching your search criteria. Please
                try another search.
              </p>
            </div>
          </div>
        </div>
        <div v-else>
          <TransitionGroup
            enter-active-class="transform-gpu"
            enter-from-class="opacity-0 -translate-x-full"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="absolute transform-gpu"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-full"
          >
            <div
              class="indicator w-full transition-all duration-300 my-2"
              v-for="item in sortedItems"
              :key="item.title"
            >
              <div class="indicator-item indicator-bottom">
                <span
                  class="indicator-item indicator-bottom indicator-end badge bg-[#BFA5A7] ring-1 ring-black/10 p-4 font-bold text-[#574143]"
                  >$1200</span
                >
              </div>
              <div
                class="card card-side bg-white/10 hover:bg-white/15 ring-2 ring-black/5 hover:shadow-md hover:shadow-white/20 w-full"
              >
                <figure>
                  <img
                    src="/public/img/gtr.jpg"
                    class="w-50 h-40"
                    alt="Movie"
                  />
                </figure>
                <div class="card-body w-full">
                  <h2 class="card-title text-[#F7F5DD]">{{ item.title }}</h2>
                  <p class="text-neutral-content">{{ item.phoneNo }}</p>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();
const supabase = createClient(
  config.public.SUPABASE_URL,
  config.public.SUPABASE_KEY
);

const tableData = ref<any[] | null>();
const filter = ref("");

const filteredItems = computed(() => {
  if (!filter.value) {
    return tableData.value;
  }

  const filterRe = new RegExp(filter.value, "i");
  return tableData.value?.filter((item) => {
    return [item.title].some((item) => item.match(filterRe));
  });
});

const sortedItems = computed(() => {
  return filteredItems.value?.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
});

onMounted(async () => {
  const { data } = await supabase.from("items").select();
  tableData.value = data;
});
</script>

<style scoped>
.indicator :where(.indicator-item.indicator-end) {
  --tw-translate-x: 10%;
  --tw-translate-y: 20%;
}

.badge {
  @apply border-none;
}
</style>
