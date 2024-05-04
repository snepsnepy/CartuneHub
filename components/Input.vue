<template>
  <div>
    <div v-if="label" class="flex pb-2 text-base-content text-sm">
      {{ label }}<span v-if="required" class="text-error">&nbsp*</span>
    </div>
    <input
      :type="type"
      v-model="modelValue"
      :placeholder="placeholder"
      class="input rounded-2xl input-bordered w-full bg-base-content ring-1 ring-base-content/30 bg-base-content/5 text-base-content focus:border-primary-hover focus:border-2"
      :class="{
        'border-error border-2 focus:border-error': invalid,
        'border-success border-2': !invalid && modelValue?.length,
      }"
    />
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
input:focus {
  @apply outline-none bg-black/15 text-base-content;
}
</style>
