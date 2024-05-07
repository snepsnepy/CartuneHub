import { navigateTo } from 'nuxt/dist/app';
<template>
  <div class="w-full flex justify-center h-full">
    <div
      class="flex w-full flex-col items-center justify-center px-4 sm:px-0 mx-8 my-8"
    >
      <div
        class="flex rounded-2xl h-full shadow-lg w-full bg-white/10 ring-2 ring-black/10 backdrop-blur-s"
      >
        <!-- Sidebar -->
        <div>
          <ul
            class="menu bg-black/25 ring-black/25 w-56 rounded-l-box h-full border-r border-base-content/15"
          >
            <div
              class="flex p-2 mb-8 w-full justify-center mx-auto items-center"
            >
              <img
                src="@/public/img/logo.png"
                alt="Logo"
                width="40"
                height="40"
                class="hidden md:flex"
              />
              <h1 class="flex mx-auto text-lg font-bold text-base-content">
                CARTUNEHUB
              </h1>
            </div>

            <li
              class="text-base-content"
              :class="{
                'bg-black/15 text-primary font-bold': routeName === Routes.HOME,
              }"
            >
              <NuxtLink to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Market
              </NuxtLink>
            </li>
            <li
              class="text-base-content"
              :class="{
                'bg-black/15 text-primary font-bold':
                  routeName === Routes.PRODUCTS,
              }"
            >
              <NuxtLink to="/Products">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Brands
              </NuxtLink>
            </li>
            <li class="text-base-content">
              <NuxtLink to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Photography
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Content -->
        <div class="w-full overflow-scroll [&::-webkit-scrollbar]:hidden">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
enum Routes {
  HOME = "/",
  PRODUCTS = "/Products",
}

const route = useRoute();
const routeName = ref("");

// Needed to save routeName to keep the active state after page refresh
onMounted(() => {
  routeName.value = route.fullPath;
});

watch(
  () => route.fullPath,
  () => {
    routeName.value = "";
  }
);
</script>

<style scoped>
:where(
    .menu li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title)
  ):not(summary, .active, .btn):focus {
  @apply bg-black/15 text-primary font-bold;
}
</style>
