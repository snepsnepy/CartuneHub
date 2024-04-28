<template>
  <div
    class="isolate mx-10 max-w-fit-content px-10 flex-col justify-center space-y-12 rounded-3xl bg-black/30 py-12 text-center shadow-lg ring-2 ring-black/10 backdrop-blur-sm"
  >
    <div class="text-center">
      <div class="text-[42px] font-bold text-white mb-4">
        Login to your account
      </div>
    </div>

    <!-- Input Fields -->
    <div>
      <div class="space-y-4">
        <Input
          type="text"
          v-model="email"
          label="Email"
          placeholder="Type your email"
          class="input rounded-full input-bordered w-full bg-white text-black"
        />

        <Input
          type="password"
          v-model="password"
          label="Password"
          placeholder="Type your password"
          class="input rounded-full input-bordered w-full bg-white text-black"
        />
      </div>

      <!-- Buttons -->
      <div class="mt-12 text-center">
        <Button
          class="btn border-0 w-full rounded-full bg-primary hover:bg-primary-hover text-secondary hover:text-black"
          type="primary"
          text="Sign In"
          :on-click="signIn"
        />
        <div class="divider flex w-full justify-center text-center text-white">
          or
        </div>
        <Button
          class="btn-default btn rounded-full btn-outline w-full text-white hover:bg-white"
          type="secondary"
          text="Sign In with Google"
          icon-name="devicon:google"
        />
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
