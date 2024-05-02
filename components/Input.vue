<template>
  <div>
    <div v-if="label" class="flex pb-2 text-white text-sm">{{ label }}</div>
    <input
      :type="type"
      v-model="modelValue"
      :placeholder="placeholder"
      class="input rounded-2xl input-bordered w-full bg-base-content text-black focus:border-primary-hover focus:border-2"
      :class="{
        'border-red-500 border-2 focus:border-red-500': invalid,
      }"
    />
    <div v-if="invalid" class="flex pb-2 text-red-500 text-sm">
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
}>();

const modelValue = ref(props.value);

watch(modelValue, () => emit("update:value", modelValue.value));
</script>

<style scoped>
input:focus {
  @apply outline-none;
}
</style>
