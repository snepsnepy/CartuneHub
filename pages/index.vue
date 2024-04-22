<template>
  <section
    class="bg-jdm-background flex h-screen items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat"
  >
    <div
      class="isolate mx-auto w-1/4 flex-col justify-center gap-y-8 rounded-3xl bg-black/20 py-20 text-center shadow-lg ring-2 ring-black/5 backdrop-blur-2xl"
    >
      <div class="py-4 text-center">
        <div class="text-[40px] font-bold text-white">Create account</div>
        <p class="text-white/80">Start selling parts today!</p>
      </div>
      <div class="px-4">
        <label class="form-control m-auto flex w-full max-w-xs justify-center">
          <div class="label">
            <span class="label-text text-white">Full name</span>
          </div>
          <input
            type="text"
            placeholder="Type your full name"
            class="input input-bordered w-full max-w-xs bg-white text-black"
          />
        </label>
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
        <div class="mt-8 text-center">
          <button
            @click="signUp"
            class="btn glass w-full max-w-xs bg-yellow-500 text-white hover:bg-yellow-400 hover:text-black"
          >
            Create account
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
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref("");
const password = ref("");
const client = useSupabaseClient();
const user = useSupabaseUser();

definePageMeta({
  middleware: "auth",
});

const signUp = async () => {
  await client.auth.signUp({
    email: email.value,
    password: password.value,
  });
};
</script>
