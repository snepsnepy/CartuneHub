<template>
  <section
    class="bg-jdm-background flex h-screen items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat"
  >
    <h1>Main page</h1>
    <input
      type="text"
      placeholder="Type here"
      v-model="item"
      class="input input-bordered w-full max-w-xs"
    />
    <button class="btn primary" v-if="user" @click="signOut">Logout</button>
    <button class="btn primary" @click="insertRow">INSERT</button>
  </section>
</template>

<script lang="ts" setup>
import { createClient } from "@supabase/supabase-js";

definePageMeta({
  middleware: "auth",
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

<style></style>
