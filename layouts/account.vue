<template>
  <div
    class="flex flex-col bg-jdm-background items-center h-screen bg-cover bg-fixed bg-center bg-no-repeat"
  >
    <div class="flex w-full p-4 justify-start">
      <img src="@/public/img/logo.png" alt="Logo" width="70" height="70" />
    </div>
    <div class="w-full flex justify-center my-auto">
      <div class="w-full">
        <div class="flex flex-col items-center justify-center px-4 sm:px-0">
          <div
            class="h-[1000px] flex rounded-2xl shadow-lg sm:w-3/4 lg:w-1/2 sm:mx-0 bg-black/15 text-center ring-2 ring-black/10 backdrop-blur-sm"
          >
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
