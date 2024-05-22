<template>
  <div>
    <div v-if="label" class="flex pb-2 text-base-content text-sm">
      {{ label }}<span v-if="required" class="text-error">&nbsp*</span>
    </div>

    <label
      class="input flex items-center gap-2 rounded-3xl w-full bg-base-content ring-1 ring-base-content/30 bg-base-content/5 text-base-content"
      :class="{
        'border-error border-2 focus:border-error': invalid,
        'border-success border-2': !invalid && modelValue?.length,
      }"
    >
      <Icon name="fa:search" class="text-neutral-content w-4 h-4" />
      <input
        :type="type"
        v-model="modelValue"
        :placeholder="placeholder"
        class="grow"
      />
    </label>

    <div v-if="invalid" class="flex py-1 text-error text-xs">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:value"]);

const props = defineProps<{
  type?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  invalid?: boolean;
  required?: boolean;
}>();

const modelValue = ref(props.value);

watch(modelValue, () => emit("update:value", modelValue.value));
</script>

<style scoped>
.input {
  @apply shadow-secondary/20 shadow-md;
}
.input:focus-within {
  @apply outline-[#C4D2BD] bg-black/20;
}

::placeholder {
  @apply text-neutral-content;
}
</style>
