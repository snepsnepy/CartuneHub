<template>
  <div>
    <div v-if="label" class="flex pb-2 text-white text-sm">{{ label }}</div>
    <input
      :type="type"
      v-model="modelValue"
      :placeholder="placeholder"
      :class="class"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:value"]);

defineProps<{
  type?: string;
  class?: string;
  value?: string;
  placeholder?: string;
  label?: string;
}>();

const modelValue = ref();

watch(modelValue, () => emit("update:value", modelValue.value));
</script>

<style scoped>
input:focus {
  @apply outline-primary;
}
</style>
