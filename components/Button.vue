<template>
  <button @click="onClick" :class="class">
    <Icon v-if="iconName" :name="iconName" />
    <p class="text-base">{{ text }}</p>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text?: string;
  class?: string;
  iconName?: string;
  onClick?: () => void;
}>();
</script>

<style scoped>
button:disabled {
  @apply bg-primary opacity-50 text-black/50;
}
</style>
