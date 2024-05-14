<template>
  <div class="w-full max-w-96">
    <h1>Products</h1>

    <Input required type="text" label="Title" v-model:value="product.title" />
    <Input
      required
      type="text"
      label="Description"
      v-model:value="product.description"
    />
    <Input
      required
      type="text"
      label="Category"
      v-model:value="product.category"
    />
    <Input required type="text" label="Email" v-model:value="product.email" />
    <Input required type="text" label="Phone" v-model:value="product.phoneNo" />

    <button class="btn glass btn-primary bg-primary mt-10" @click="insertRow">
      Add item
    </button>
  </div>
</template>

<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";

definePageMeta({
  layout: "dashboard",
});

const user = useSupabaseUser();

const config = useRuntimeConfig();
const supabase = createClient(
  config.public.SUPABASE_URL,
  config.public.SUPABASE_KEY
);

const product = reactive({
  title: "",
  category: "",
  email: "",
  phoneNo: "",
  description: "",
  userId: user.value?.id,
});

const insertRow = async () => {
  if (product) {
  }
  await supabase.from("items").insert(product).select();
};
</script>
