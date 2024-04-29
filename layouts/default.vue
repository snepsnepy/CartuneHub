<template>
  <div
    class="flex bg-red-500 flex-col bg-jdm-background h-screen items-center bg-cover bg-fixed bg-center bg-no-repeat"
  >
    <div class="flex w-full p-4 justify-start">
      <img src="@/public/img/logo.png" alt="Logo" width="70" height="70" />
    </div>
    <div class="w-full flex justify-center my-auto">
      <slot />
    </div>
  </div>
</template>
