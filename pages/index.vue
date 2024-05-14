<template>
  <ClientOnly>
    <div
      class="w-full mx-auto py-24 px-4 max-h-full h-full overflow-scroll [&::-webkit-scrollbar]:hidden"
    >
      <!-- Title -->
      <div class="text-center">
        <h1 class="mb-2 font-sans text-4xl font-bold text-slate-800">
          Listed Items
        </h1>
        <p class="font-sans text-lg text-slate-500">
          A filterable list of products for testing puropses
        </p>
      </div>

      <!-- Search -->
      <div class="relative w-full mx-auto flex mt-10 mb-20">
        <input
          v-model="filter"
          type="text"
          class="peer w-full h-12 inline-flex items-center pl-12 pr-4 rounded-xl border border-slate-300 text-slate-700 placeholder:text-slate-300 font-sans leading-snug outline-none focus-visible:outline-dashed focus-visible:outline-offset-4 focus-visible:outline-slate-300"
          placeholder="Filter items..."
        />
        <div
          class="absolute top-0 left-0 h-12 w-12 flex items-center justify-center text-slate-400 peer-focus:text-violet-500 transition-colors duration-300"
        >
          <Icon name="lucide:search" class="w-5 h-5" />
        </div>
      </div>

      <!-- List wrapper -->
      <div class="relative">
        <!-- Placeholder -->
        <div v-if="sortedItems?.length === 0">
          <div
            class="text-center max-w-sm mx-auto flex items-center justify-center py-24"
          >
            <div>
              <Icon name="et:layers" class="w-12 h-12 mb-4 text-slate-400" />
              <h3 class="font-sans text-lg text-slate-700">No items found</h3>
              <p class="text-sm text-slate-400">
                We couldn't find any items matching your search criteria. Please
                try another search.
              </p>
            </div>
          </div>
        </div>
        <div v-else class="relative grid sm:grid-cols-3 gap-6">
          <TransitionGroup
            enter-active-class="transform-gpu"
            enter-from-class="opacity-0 -translate-x-full"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="absolute transform-gpu"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-full"
          >
            <div
              v-for="item in sortedItems"
              :key="item.title"
              class="font-sans border border-slate-200 p-6 rounded-xl bg-white hover:shadow-xl hover:shadow-slate-300/20 transition-all duration-300"
            >
              <!-- Title -->
              <div class="flex justify-center text-black">
                {{ item.category }}
              </div>

              <!-- Details -->
              <div class="text-center mt-4">
                <h4 class="text-lg font-medium text-slate-700">
                  {{ item.title }}
                </h4>
                <p class="text-sm text-slate-400">{{ item.phoneNo }}</p>
                <a
                  :href="`mailto:${item.email}`"
                  class="flex items-center justify-center gap-2 py-4 text-sm underline-offset-4 text-slate-500 hover:text-violet-500 hover:underline transition-colors duration-300"
                >
                  <Icon name="lucide:mail" class="w-4 h-4" />
                  <span>{{ item.email }}</span>
                </a>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { createClient } from "@supabase/supabase-js";

definePageMeta({
  middleware: "auth",
  layout: "dashboard",
});

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

const { data } = await supabase.from("items").select();
tableData.value = data;
</script>

<style scoped>
.card {
  @apply bg-black/25;
}
</style>
