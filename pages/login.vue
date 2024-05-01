<template>
  <div
    class="hidden bg-login-background md:block md:w-1/2 rounded-l-2xl bg-cover"
  ></div>
  <div class="flex flex-col w-full md:w-1/2 p-4">
    <div class="flex flex-col flex-1 justify-center px-4">
      <div class="text-4xl font-bold text-base-content mb-10">
        Login to Your Account
      </div>

      <!-- Input Fields -->
      <div class="w-full mt-4">
        <div class="space-y-4">
          <Input
            type="text"
            v-model:value="email"
            label="Email"
            placeholder="Type your email"
            class="input rounded-2xl input-bordered w-full bg-white text-black"
          />

          <Input
            type="password"
            v-model:value="password"
            label="Password"
            placeholder="Type your password"
            class="input rounded-2xl input-bordered w-full bg-white text-black"
          />
        </div>
      </div>

      <!-- Buttons -->
      <div class="mt-14 text-center">
        <Button
          class="btn border-0 w-full rounded-2xl bg-primary hover:bg-primary-hover text-black hover:text-black"
          text="Sign In"
          :on-click="signIn"
        />
        <div class="divider flex w-full justify-center text-center text-white">
          or
        </div>
        <Button
          class="btn-default btn rounded-2xl btn-outline w-full text-white hover:bg-white"
          text="Sign In with Google"
          icon-name="devicon:google"
        />
      </div>

      <!-- Bottom message -->
      <div class="mt-12 text-center">
        <p class="text-base-content">
          You don't have an account yet? Create one
          <a href="/register" class="text-primary">here</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("snepysneptest@gmail.com");
const password = ref("mihnea123");
const client = useSupabaseClient();

definePageMeta({
  layout: "account",
});

const signIn = async () => {
  await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  navigateTo("/");
};
</script>

<style scoped>
.divider:before,
.divider:after {
  @apply bg-white h-px;
}
</style>
