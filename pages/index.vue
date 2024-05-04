<template>
  <div>
    <h1>Dashboard</h1>
  </div>
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

<style>
#__nuxt
  > div
  > div.w-full.flex.justify-center.h-full
  > div
  > div
  > div:nth-child(1)
  > ul
  > li:nth-child(1)
  > a {
  @apply active;
}
</style>
