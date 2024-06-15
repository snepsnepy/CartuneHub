<template>
  <!-- Title -->
  <section class="flex px-2 lg:px-0 flex-col w-full lg:w-2/3">
    <div class="flex pt-4 lg:pt-0 mb-4">
      <!-- Title & Description -->
      <div class="w-full flex items-center my-auto">
        <p class="font-sans text-base-content text-xl tracking-wider h-full">
          Parts Marketplace
        </p>
        <button
          v-if="!isDesktop"
          class="btn bg-primary text-base-content"
          @click="store.toggleSidebar"
        >
          Toggle
        </button>
      </div>

      <!-- Search bar -->
      <div class="w-full flex items-center">
        <Input
          type="text"
          placeholder="Start searching here ..."
          v-model:value="filter"
          class="w-full h-12 inline-flex items-center rounded-xl backdrop-blur-2xl"
        />
      </div>
    </div>

    <div
      class="rounded-3xl p-4 overflow-scroll h-full [&::-webkit-scrollbar]:hidden bg-white/5 backdrop-blur-2xl ring-1 ring-white/20 shadow-secondary/20 shadow-lg"
    >
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
          <div class="flex flex-col">
            <div class="container mx-auto p-4 flex items-center justify-center">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  class="card w-full ring-1 ring-white/20 bg-white/5"
                  v-for="item in filteredItems"
                  :key="item.title"
                >
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">
                      {{ item.title }}
                      <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{{ item.description }}</p>
                    <div class="card-actions justify-end">
                      <div class="badge badge-outline">Fashion</div>
                      <div class="badge badge-outline">Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex w-full justify-center" v-if="loadMore">
              <button
                class="btn bg-primary text-primary-content hover:bg-primary-hover"
                @click="fetchData"
              >
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";

const store = useGlobalStore();
const config = useRuntimeConfig();
const supabase = createClient(
  config.public.SUPABASE_URL,
  config.public.SUPABASE_KEY
);

const tableData = ref<any[] | null>([]);
const filter = ref("");
const loadMore = ref(true);

const page = ref(0);

const setPage = () => (page.value += 1);

const getFromAndTo = () => {
  const ITEMS_PER_PAGE = 2;

  let from = page.value * ITEMS_PER_PAGE;
  let to = from + ITEMS_PER_PAGE;

  if (page.value > 0) {
    from += 1;
  }

  return { from, to };
};

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

const fetchData = async () => {
  const { from, to } = getFromAndTo();
  const { data } = await supabase.from("items").select("*").range(from, to);
  loadMore.value = data?.length !== 1;
  setPage();
  tableData.value = [...tableData.value!, ...data!];
};

onMounted(async () => {
  fetchData();
});
</script>

<style scoped>
.indicator :where(.indicator-item.indicator-start) {
  --tw-translate-x: 10%;
  --tw-translate-y: 20%;
}

.badge {
  @apply border-none;
}
</style>
