<template>
  <button
    @click="props.onClick"
    :class="{
      'btn border-0 w-full rounded-full max-w-xs bg-primary hover:bg-primary-hover text-secondary hover:text-black':
        props.type === 'primary',
      'btn-default btn rounded-full btn-outline w-full max-w-xs text-white hover:bg-white':
        props.type === 'secondary',
    }"
  >
    <Icon v-if="props.iconName" :name="props.iconName" />
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
import type { ButtonType } from "@/types/components/Button.ts";

const props = defineProps<{
  text?: string;
  type: ButtonType;
  iconName?: string;
  onClick?: () => void;
}>();
</script>
