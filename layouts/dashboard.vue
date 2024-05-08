<template>
  <div class="flex flex-col gap-y-8 py-8 mx-8">
    <!-- NAVBAR -->
    <div
      class="navbar rounded-2xl h-full shadow-lg w-full bg-white/10 ring-2 ring-black/10 backdrop-blur-s"
    >
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="text-base-content text-xl font-bold">CARTUNEHUB</a>
      </div>
      <div class="navbar-end">
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- MAIN VIEW -->
    <div class="w-full flex justify-center h-screen gap-x-8">
      <div class="flex w-full flex-col items-center justify-center sm:px-0">
        <div
          class="flex rounded-2xl h-full shadow-lg w-full bg-white/10 ring-2 ring-black/10 backdrop-blur-s"
        >
          <!-- Content -->
          <div class="w-full overflow-scroll [&::-webkit-scrollbar]:hidden">
            <slot />
          </div>
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="flex w-1/4">
        <ul
          class="menu rounded-2xl h-full shadow-lg w-full bg-white/10 ring-2 ring-black/10 backdrop-blur-s"
        >
          <h1 class="flex text-lg font-bold text-base-content py-2 px-2">
            Quick actions
          </h1>

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
