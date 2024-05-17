<template>
  <!-- Title -->
  <div class="text-center">
    <h1 class="mb-2 font-sans text-4xl font-bold text-base-content">
      Listed Items
    </h1>
    <p class="font-sans text-lg text-base-content">
      A filterable list of products for testing puropses
    </p>
  </div>

  <!-- Search -->
  <div class="relative flex w-full mt-10 mb-20">
    <Input
      type="text"
      placeholder="Search items.."
      v-model:value="filter"
      class="w-full h-12 inline-flex items-center rounded-xl"
    />
  </div>

  <!-- List wrapper -->
  <div class="relative">
    <!-- Placeholder -->
    <div v-if="sortedItems?.length === 0">
      <div
        class="text-center max-w-sm mx-auto flex items-center justify-center py-24"
      >
        <div>
          <Icon name="et:layers" class="w-12 h-12 mb-4 text-base-content" />
          <h3 class="font-sans text-lg text-base-content">No items found</h3>
          <p class="text-sm text-base-content">
            We couldn't find any items matching your search criteria. Please try
            another search.
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
          class="font-sans rounded-xl hover:shadow-lg hover:shadow-slate-300/20 transition-all duration-300 shadow-lg w-full bg-black/50 ring-2 ring-white/20 backdrop-blur-sm"
        >
          <!-- Image -->
          <figure>
            <img
              src="/public/img/background.png"
              alt="Shoes"
              class="rounded-t-xl"
            />
          </figure>

          <!-- Title -->
          <div class="flex justify-center text-base-content">
            {{ item.category }}
          </div>

          <!-- Details -->
          <div class="text-center mt-4">
            <h4 class="text-lg font-medium text-primary">
              {{ item.title }}
            </h4>
            <p class="text-sm text-base-content">{{ item.phoneNo }}</p>
            <a
              :href="`mailto:${item.email}`"
              class="flex items-center justify-center gap-2 py-4 text-sm underline-offset-4 text-base-content hover:text-violet-500 hover:underline transition-colors duration-300"
            >
              <Icon name="lucide:mail" class="w-4 h-4" />
              <span>{{ item.email }}</span>
            </a>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
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

const { data } = await supabase.from("items").select();
tableData.value = data;
</script>
