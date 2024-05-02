// SCHEMA & RULES

import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";

// USER REGISTRATION VALIDATIONS
export const registrationSchema = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

export const registrationRules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("This field is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    password: {
      required: helpers.withMessage("This field is required", required),
      minLength: helpers.withMessage(
        "Password needs to be at least 6 characters long",
        minLength(6)
      ),
    },
    confirmPassword: {
      required: helpers.withMessage("This field is required", required),
      sameAs: helpers.withMessage(
        "Passowrd doesn't match",
        sameAs(registrationSchema.password)
      ),
    },
  };
});

// USER LOGIN VALIDATIONS
export const loginSchema = reactive({
  email: "",
  password: "",
});

export const loginRules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("This field is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    password: {
      required: helpers.withMessage("This field is required", required),
    },
  };
});
