<template>
  <div>
    <h1>Notes</h1>
    <button class="btn primary" v-if="user" @click="signOut">Logout</button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});

const client = useSupabaseClient();
const user = useSupabaseUser();

const signOut = async () => {
  await client.auth.signOut();
  navigateTo("/login");
};
</script>

<style></style>
