<template>
  <div class="w-full flex justify-center items-center py-10">
    <div class="w-full">
      <div class="flex flex-col items-center justify-center px-4 sm:px-0">
        <div
          class="flex rounded-2xl shadow-lg sm:w-3/4 lg:w-1/2 sm:mx-0 bg-white/15 text-center ring-2 ring-black/10 backdrop-blur-sm"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
