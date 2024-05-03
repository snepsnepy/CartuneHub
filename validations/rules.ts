import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";

// ERROR MESSAGES

const requiredMessage = "This field is required. Please fill it in.";
const emailMessage = "Please enter a valid email address.";
const passwordMessage = {
  minLength: "Password must be at least 6 characters long.",
  sameAs: "Passwords do not match. Please ensure they are identical.",
};

// SCHEMA & RULES
// USER REGISTRATION VALIDATIONS
export const registrationSchema = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

export const registrationRules = computed(() => {
  return {
    email: {
      required: helpers.withMessage(requiredMessage, required),
      email: helpers.withMessage(emailMessage, email),
    },
    password: {
      required: helpers.withMessage(requiredMessage, required),
      minLength: helpers.withMessage(passwordMessage.minLength, minLength(6)),
    },
    confirmPassword: {
      required: helpers.withMessage(requiredMessage, required),
      sameAs: helpers.withMessage(
        passwordMessage.sameAs,
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
      required: helpers.withMessage(requiredMessage, required),
      email: helpers.withMessage(emailMessage, email),
    },
    password: {
      required: helpers.withMessage(requiredMessage, required),
    },
  };
});
