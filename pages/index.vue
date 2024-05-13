<template>
  <section class="flex w-full h-full">
    <!-- Right Sidebar -->
    <div class="hidden xl:w-1/4 py-4 pl-4 lg:flex">
      <ul
        class="menu rounded-2xl h-full shadow-lg w-full bg-white/10 ring-2 ring-white/20 backdrop-blur-s"
      >
        <h1 class="flex text-lg font-bold text-base-content py-2 px-2">
          Filters
        </h1>

        <li class="text-base-content">
          <NuxtLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Market
          </NuxtLink>
        </li>
        <li class="text-base-content">
          <NuxtLink to="/Products">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Brands
          </NuxtLink>
        </li>
        <li class="text-base-content">
          <NuxtLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Photography
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="flex flex-col w-full">
      <!-- Search Bar -->
      <div class="flex justify-center text-base-content h-fit w-full">
        <label
          class="input flex rounded-full items-center gap-2 w-1/2 bg-white/10 shadow-xl ring-2 ring-white/20 backdrop-blur-s"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="text"
            class="grow"
            placeholder="Search product by name"
          />
        </label>
      </div>

      <!-- CARDS -->
      <div
        class="flex w-full flex-wrap justify-center overflow-scroll [&::-webkit-scrollbar]:hidden"
      >
        <div
          class="card w-72 h-fit shadow-xl ring-2 ring-white/10 backdrop-blur-s m-2"
        >
          <figure>
            <img src="/img/background.png" alt="Shoes" />
          </figure>
          <div class="card-body bg-white/20 rounded-b-2xl text-white">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <div
          class="card w-72 h-fit shadow-xl ring-2 ring-white/10 backdrop-blur-s m-2"
        >
          <figure>
            <img src="/img/background.png" alt="Shoes" />
          </figure>
          <div class="card-body bg-white/20 rounded-b-2xl text-white">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <div
          class="card w-72 h-fit shadow-xl ring-2 ring-white/10 backdrop-blur-s m-2"
        >
          <figure>
            <img src="/img/background.png" alt="Shoes" />
          </figure>
          <div class="card-body bg-white/20 rounded-b-2xl text-white">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <div
          class="card w-72 h-fit bg-base-100 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-2"
        >
          <figure>
            <img src="/img/background.png" alt="Shoes" />
          </figure>
          <div class="card-body bg-white/20 rounded-b-2xl text-white">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <div
          class="card w-72 h-fit bg-base-100 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-2"
        >
          <figure>
            <img src="/img/background.png" alt="Shoes" />
          </figure>
          <div class="card-body bg-white/20 rounded-b-2xl text-white">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <div
          class="card w-72 h-fit bg-base-100 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-2"
        >
          <figure>
            <img src="/img/background.png" alt="Shoes" />
          </figure>
          <div class="card-body bg-white/20 rounded-b-2xl text-white">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cards -->
    <!-- <div class="flex w-full flex-wrap justify-center">
        <div
          class="card w-96 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-2"
        >
          <figure>
            <img src="/img/background.png" alt="Shoes" />
          </figure>
          <div class="card-body bg-white/20 rounded-b-2xl text-white">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <div
          class="card w-96 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-2"
        >
          <figure>
            <img src="/img/background.png" alt="Shoes" />
          </figure>
          <div class="card-body bg-white/20 rounded-b-2xl text-white">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <div
          class="card w-96 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-2"
        >
          <figure>
            <img src="/img/background.png" alt="Shoes" />
          </figure>
          <div class="card-body bg-white/20 rounded-b-2xl text-white">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <div
          class="card w-96 bg-base-100 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-2"
        >
          <figure>
            <img src="/img/background.png" alt="Shoes" />
          </figure>
          <div class="card-body bg-white/20 rounded-b-2xl text-white">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <div
          class="card w-96 bg-base-100 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-2"
        >
          <figure>
            <img src="/img/background.png" alt="Shoes" />
          </figure>
          <div class="card-body bg-white/20 rounded-b-2xl text-white">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <div
          class="card w-96 bg-base-100 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-2"
        >
          <figure>
            <img src="/img/background.png" alt="Shoes" />
          </figure>
          <div class="card-body bg-white/20 rounded-b-2xl text-white">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div> -->
  </section>
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

const client = useSupabaseClient();
const user = useSupabaseUser();

const item = ref("");

const signOut = async () => {
  await client.auth.signOut();
  navigateTo("/login");
};

const insertRow = async () => {
  if (item.value) {
  }
  await supabase.from("posts").insert({ title: item.value }).select();
};
</script>

<style scoped>
.card {
  @apply bg-black/25;
}
</style>
