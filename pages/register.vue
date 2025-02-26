<template>
  <div
    class="hidden bg-login-background md:block md:w-1/2 rounded-l-2xl bg-cover"
  ></div>
  <div class="flex flex-col w-full md:w-1/2 p-6 py-20">
    <div class="flex flex-col flex-1 justify-center px-4">
      <div class="flex justify-center mb-8">
        <img
          src="/public/img/logo.png"
          alt="Logo"
          class="w-20 h-20 md:hidden"
        />
      </div>
      <div class="text-4xl font-bold text-base-content mb-10">
        Create account
      </div>

      <!-- Input Fields -->
      <div class="w-full mt-4">
        <div class="space-y-4">
          <Input
            required
            type="text"
            label="Email"
            placeholder="Type your email"
            v-model:value="registrationSchema.email"
            @input="v$.email.$touch"
            :invalid="v$.email.$error"
            :error-message="
              registrationSchema.email.length
                ? v$.email.email.$message
                : v$.email.required.$message
            "
          />

          <Input
            required
            type="password"
            label="Password"
            placeholder="Password"
            v-model:value="registrationSchema.password"
            @input="v$.password.$touch"
            :invalid="v$.password.$error"
            :error-message="
              registrationSchema.password.length
                ? v$.password.minLength.$message
                : v$.password.required.$message
            "
          />

          <Input
            required
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            v-model:value="registrationSchema.confirmPassword"
            @input="v$.confirmPassword.$touch"
            :invalid="v$.confirmPassword.$error"
            :error-message="
              registrationSchema.confirmPassword.length
                ? v$.confirmPassword.sameAs.$message
                : v$.confirmPassword.required.$message
            "
          />
        </div>
      </div>

      <!-- Buttons -->
      <div class="mt-14 text-center">
        <Button
          text="Create Account"
          class="btn border-0 w-full rounded-3xl bg-primary hover:bg-primary-hover text-base-content hover:text-base-content"
          :on-click="signUp"
          :disabled="
            v$.email.$error || v$.password.$error || v$.confirmPassword.$error
          "
        />
        <div
          class="divider m-auto my-4 flex w-full justify-center text-center text-base-content"
        >
          or
        </div>

        <Button
          class="btn-default btn rounded-3xl btn-outline w-full text-base-content hover:bg-base-content"
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
import { useVuelidate } from "@vuelidate/core";
import { registrationSchema, registrationRules } from "@/validations/rules";

definePageMeta({
  layout: "account",
});

const client = useSupabaseClient();

const v$ = useVuelidate(registrationRules, registrationSchema);

const signUp = async () => {
  v$.value.$validate();

  if (!v$.value.$error) {
    await client.auth.signUp({
      email: registrationSchema.email,
      password: registrationSchema.password,
    });
    navigateTo("/login");
  }
};
</script>

<style scoped>
.divider:before,
.divider:after {
  @apply bg-base-content h-px;
}
</style>
~/validations/rules
