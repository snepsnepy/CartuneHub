<template>
  <button @click="onClick" :class="class">
    <Icon v-if="iconName" :name="iconName" />
    {{ text }}
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
