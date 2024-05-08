<template>
  <section class="flex flex-col gap-y-8 py-8 h-full">
    <!-- Search Bar -->
    <div class="flex w-full justify-center text-base-content">
      <label
        class="input flex items-center gap-2 w-1/2 bg-white/10 shadow-xl ring-2 ring-white/20 backdrop-blur-s"
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
        <input type="text" class="grow" placeholder="Search product by name" />
      </label>
    </div>

    <!-- Cards -->
    <div class="flex w-full flex-wrap justify-center">
      <div class="card w-96 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-8">
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

      <div class="card w-96 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-8">
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

      <div class="card w-96 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-8">
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
        class="card w-96 bg-base-100 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-8"
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
        class="card w-96 bg-base-100 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-8"
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
        class="card w-96 bg-base-100 shadow-xl ring-2 ring-white/10 backdrop-blur-s m-8"
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
