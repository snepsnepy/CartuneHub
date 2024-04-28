<template>
  <div>
    <div v-if="label" class="flex pb-2 text-white text-sm">{{ label }}</div>
    <input
      :type="type"
      v-model="props.modelValue"
      :placeholder="placeholder"
      :class="class"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type?: string;
  class?: string;
  modelValue?: string;
  placeholder?: string;
  label?: string;
}>();
</script>

<style scoped>
input:focus {
  @apply outline-primary;
}
</style>
