<template>
  <div
    class="hidden bg-login-background md:block md:w-1/2 rounded-l-2xl bg-cover"
  ></div>
  <div class="flex flex-col w-full md:w-1/2 p-6 py-40">
    <div class="flex flex-col flex-1 justify-center px-4">
      <div class="flex justify-center mb-8">
        <img
          src="/public/img/logo.png"
          alt="Logo"
          class="w-20 h-20 md:hidden"
        />
      </div>
      <div class="text-4xl font-bold text-base-content mb-10">
        Login to Your Account
      </div>

      <!-- Input Fields -->
      <div class="w-full mt-4">
        <div class="space-y-4">
          <Input
            required
            type="text"
            label="Email"
            v-model:value="loginSchema.email"
            placeholder="Type your email"
            @input="v$.email.$touch"
            :invalid="v$.email.$error"
            :error-message="
              loginSchema.email.length
                ? v$.email.email.$message
                : v$.email.required.$message
            "
          />

          <Input
            required
            type="password"
            label="Password"
            v-model:value="loginSchema.password"
            placeholder="Type your password"
            @input="v$.password.$touch"
            :invalid="v$.password.$error"
            :error-message="v$.password.required.$message"
          />
        </div>
      </div>

      <!-- Buttons -->
      <div class="mt-14 text-center">
        <Button
          class="btn border-0 w-full rounded-2xl bg-primary hover:bg-primary-hover text-black hover:text-black"
          text="Sign In"
          :on-click="signIn"
          :disabled="v$.email.$error || v$.password.$error"
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
import useVuelidate from "@vuelidate/core";
import { loginRules, loginSchema } from "~/validations/rules";

const client = useSupabaseClient();

const v$ = useVuelidate(loginRules, loginSchema);

definePageMeta({
  layout: "account",
});

const signIn = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    await client.auth.signInWithPassword({
      email: loginSchema.email,
      password: loginSchema.password,
    });
    navigateTo("/");
  }
};
</script>

<style scoped>
.divider:before,
.divider:after {
  @apply bg-white h-px;
}
</style>
