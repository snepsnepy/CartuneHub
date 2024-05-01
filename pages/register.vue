<template>
  <div
    class="hidden bg-login-background md:block md:w-1/2 rounded-l-2xl bg-cover"
  ></div>
  <div class="flex flex-col w-full md:w-1/2 p-4">
    <div class="flex flex-col flex-1 justify-center px-4">
      <div class="text-4xl font-bold text-base-content mb-10">
        Create account
      </div>

      <!-- Input Fields -->
      <div class="space-y-4">
        <Input
          type="text"
          placeholder="Type your full name"
          label="Full Name"
          class="input rounded-2xl input-bordered w-full bg-base-content text-black"
        />
        <Input
          type="text"
          placeholder="Type your email"
          v-model:value="email"
          label="Email"
          class="input rounded-2xl input-bordered w-full bg-base-content text-black"
        />

        <Input
          type="password"
          placeholder="Password"
          v-model:value="password"
          label="Password"
          class="input rounded-2xl input-bordered w-full bg-base-content text-black"
        />
      </div>

      <!-- Buttons -->
      <div class="mt-14 text-center">
        <Button
          text="Create Account"
          class="btn border-0 w-full rounded-2xl bg-primary hover:bg-primary-hover text-black hover:text-black"
          :on-click="signUp"
        />
        <div
          class="divider m-auto my-4 flex w-full justify-center text-center text-base-content"
        >
          or
        </div>

        <Button
          class="btn-default btn rounded-2xl btn-outline w-full text-base-content hover:bg-base-content"
          text="Sign Up with Google"
          icon-name="devicon:google"
        />
      </div>

      <!-- Bottom message -->
      <div class="mt-12 text-center">
        <p class="text-base-content">
          Already have an account?
          <a href="/login" class="text-primary">Sign In</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");
const client = useSupabaseClient();

definePageMeta({
  layout: "account",
});

const signUp = async () => {
  await client.auth.signUp({
    email: email.value,
    password: password.value,
  });
  navigateTo("/login");
};
</script>

<style scoped>
input:focus {
  @apply outline-primary;
}

.divider:before,
.divider:after {
  @apply bg-base-content h-px;
}
</style>
