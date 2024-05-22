<template>
  <div class="h-screen lg:py-4 lg:ml-14">
    <Sidebar />
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
:where(
    .menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)
  ):not(summary, .active, .btn):focus {
  @apply bg-black/15 text-primary font-bold;
}
</style>
