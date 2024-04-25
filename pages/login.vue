<template>
  <section
    class="bg-jdm-background flex h-screen items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat"
  >
    <div
      class="isolate mx-auto w-1/4 flex-col justify-center gap-y-8 rounded-3xl bg-black/30 py-20 text-center shadow-lg ring-2 ring-black/10 backdrop-blur-sm"
    >
      <div class="py-4 text-center">
        <div class="text-[40px] font-bold text-white">
          Login to your account
        </div>
      </div>
      <div class="px-4">
        <label class="form-control m-auto flex w-full max-w-xs justify-center">
          <div class="label">
            <span class="label-text text-white">Email</span>
          </div>
          <input
            type="text"
            v-model="email"
            placeholder="Type your email"
            class="input input-bordered w-full max-w-xs bg-white text-black"
          />
        </label>
        <label class="form-control m-auto flex w-full max-w-xs justify-center">
          <div class="label">
            <span class="label-text text-white">Password</span>
          </div>
          <input
            type="password"
            v-model="password"
            placeholder="Type your password"
            class="input input-bordered w-full max-w-xs bg-white text-black"
          />
        </label>
        <div class="mt-12 text-center">
          <button
            @click="signIn"
            class="btn glass w-full max-w-xs bg-primary hover:bg-primary-hover text-secondary hover:text-black"
          >
            Sign In
          </button>
          <div
            class="divider m-auto my-4 flex w-full max-w-xs justify-center text-center text-white"
          >
            or
          </div>
          <button
            class="btn-default btn btn-outline w-full max-w-xs text-white hover:bg-white"
          >
            <Icon name="devicon:google" />
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  </section>
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

input:focus {
  @apply outline-primary;
}
</style>
