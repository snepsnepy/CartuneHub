<template>
  <div class="flex flex-col gap-y-4 py-4 mx-8">
    <!-- NAVBAR -->
    <div
      class="navbar rounded-2xl h-full shadow-lg w-full bg-white/10 ring-2 ring-white/20 backdrop-blur-s"
    >
      <div class="navbar-start">
        <div class="dropdown">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle text-white"
          >
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
    <div class="w-full flex justify-center h-screen">
      <div class="flex w-full flex-col items-center justify-center sm:px-0">
        <div
          class="flex rounded-2xl h-full shadow-lg w-full bg-white/10 ring-2 ring-white/20 backdrop-blur-s"
        >
          <!-- Content -->
          <div class="w-full overflow-scroll [&::-webkit-scrollbar]:hidden">
            <slot />
          </div>

          <!-- Right Sidebar -->
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
