<template>
  <div
    class="isolate mx-10 w-1/3 px-10 flex-col justify-center space-y-12 rounded-2xl bg-base-content/10 py-12 text-center shadow-lg ring-2 ring-base-content/10 backdrop-blur-sm"
  >
    <div class="text-center">
      <div class="text-4xl font-bold text-base-content mb-4">
        Login to Your Account
      </div>
      <!-- <p class="text-base-content">Start selling parts today!</p> -->
    </div>

    <!-- Input Fields -->
    <div>
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

      <!-- Buttons -->
      <div class="mt-12 text-center">
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
