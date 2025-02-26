<template>
  <div
    :class="{
      sidebar: true,
      open: store.isSidebarOpened,
    }"
    class="py-4"
  >
    <div class="logo-details pl-4">
      <img
        v-if="store.isSidebarOpened"
        src="/img/logo.png"
        alt="menu-logo"
        class="menu-logo"
      />

      <div class="logo_name">CARTUNEHUB</div>
      <Icon
        :name="
          store.isSidebarOpened
            ? 'heroicons-solid:menu-alt-3'
            : 'heroicons-solid:menu'
        "
        :class="{
          'mr-2 text-base-content': store.isSidebarOpened,
          'mx-4 lg:mx-7 text-base-content ': !store.isSidebarOpened,
        }"
        id="btn"
        @click="store.toggleSidebar"
      />
    </div>

    <div
      class="flex flex-col justify-between flex-grow"
      style="max-height: calc(100% - 60px)"
    >
      <div id="my-scroll" class="px-1 lg:px-4">
        <ul class="nav-list overflow-visible">
          <li
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :id="'links_' + index"
          >
            <router-link :to="menuItem.link!">
              <Icon class="bx iconify" :name="menuItem.icon!" />
              <span class="links_name">{{ menuItem.name }}</span>
              <span
                v-show="tooltipActive"
                :data-target="'links_' + index"
                class="tooltip"
                >{{ menuItem.tooltip || menuItem.name }}</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const store = useGlobalStore();

defineProps<{
  profileImg?: string;
  profileName?: string;
  profileRole?: string;
  isExitButton?: boolean;
  isLoggedIn?: boolean;
}>();

onMounted(() => {
  tooltipAttached();
});

const menuItems: Array<{
  link: string;
  name: string;
  tooltip?: string;
  icon?: string;
}> = [
  {
    link: "/",
    name: "Dashboard",
    tooltip: "Dashboard",
    icon: "akar-icons:dashboard",
  },
  {
    link: "/products",
    name: "Market",
    tooltip: "Market",
    icon: "mdi:cart-outline",
  },
  {
    link: "#",
    name: "Stores",
    tooltip: "Stores",
    icon: "streamline:shopping-store-2-store-shop-shops-stores",
  },
  {
    link: "#",
    name: "Saved",
    tooltip: "Saved",
    icon: "fa-regular:heart",
  },
];

const tooltipActive = ref(false);

const tooltipAttached = () => {
  const tooltips = document.querySelectorAll(".tooltip");
  tooltips.forEach((tooltip) => {
    document.body.appendChild(tooltip);
  });

  tooltips.forEach((tooltip) => {
    if (tooltip instanceof HTMLElement) {
      const targetID = tooltip.dataset.target;
      const target = document.querySelector(`#${targetID}`);
      if (!target) return;
      target.addEventListener("mouseenter", () => {
        tooltipActive.value = true;
        const targetPosition = target.getBoundingClientRect();
        if (store.isSidebarOpened) return;
        tooltip.style.top = `${targetPosition.top + window.scrollY}px`;
        tooltip.style.left = `${
          targetPosition.left + targetPosition.width + 20
        }px`;
        tooltip.classList.add("active");
      });
      target.addEventListener("mouseleave", () => {
        tooltipActive.value = false;
        tooltip.classList.remove("active");
      });
    }
  });
};
</script>

<style scoped>
.sidebar {
  @apply hidden lg:flex flex-col fixed w-14 h-full left-0 top-0 lg:left-4 lg:top-1/4 lg:min-h-min lg:h-fit lg:w-20 lg:rounded-3xl bg-white/5 backdrop-blur-xl z-[99] transition-all ease-linear duration-300 shadow-secondary/20 shadow-md ring-1 ring-white/20;
}

.sidebar.open {
  @apply w-64 flex;
}

.sidebar .logo-details {
  @apply flex items-center relative h-16;
}

.sidebar .logo-details .iconify {
  @apply opacity-0 transition-all ease-linear duration-300;
}

.sidebar .logo-details .logo_name {
  @apply text-base-content text-base font-bold opacity-0 transition-all ease-linear duration-300;
}

.sidebar.open .logo-details .iconify,
.sidebar.open .logo-details .logo_name {
  @apply opacity-100;
}

.sidebar .logo-details #btn {
  @apply absolute top-1/3 right-0  text-2xl text-center cursor-pointer transition-all ease-linear duration-300;
}

.sidebar.open .logo-details #btn {
  @apply text-right;
}

.sidebar .iconify,
.sidebar i {
  @apply text-base-content bg-transparent min-w-6 ml-3 text-center;
}

.sidebar li .iconify,
.sidebar li i {
  @apply h-12 leading-[50px] rounded-3xl;
}

.sidebar .nav-list {
  @apply mt-5;
}

.sidebar li {
  @apply relative my-2 mx-0 list-none;
}

.sidebar li a {
  @apply flex bg-transparent h-full w-full items-center no-underline transition-all ease-linear duration-300 rounded-3xl sm:w-full;
}

.sidebar li a:hover {
  @apply bg-primary;
}

.sidebar li a .links_name {
  @apply text-base-content pl-2 text-base whitespace-nowrap opacity-0 pointer-events-none transition-all duration-300;
}

.sidebar.open li a .links_name {
  @apply opacity-100 pointer-events-auto;
}

.sidebar li a:hover .links_name,
.sidebar li a:hover i {
  @apply transition-all ease-linear duration-200 text-base-content;
}

.sidebar.open li router-link .links_name {
  @apply opacity-100 pointer-events-auto;
}

.sidebar li router-link:hover .links_name,
.sidebar li router-link:hover i {
  @apply transition-all ease-linear duration-300 text-primary;
}

.sidebar div img {
  @apply h-12 w-12 object-cover rounded-md mr-2;
}

.my-scroll-active {
  @apply overflow-y-auto;
}

.tooltip {
  @apply absolute z-[3] bg-black/20 backdrop-blur-xl shadow-md ring-1 ring-white/20 shadow-secondary/20 text-base-content py-1 px-3 rounded-md text-base opacity-0 whitespace-nowrap pointer-events-none duration-0;
}

.tooltip.active {
  @apply opacity-100 pointer-events-auto transition-all ease-linear duration-300 translate-y-1/4;
}

.sidebar.open li .tooltip {
  @apply hidden;
}

#my-scroll {
  height: calc(100% - 60px);
}

#my-scroll::-webkit-scrollbar {
  @apply hidden;
}
</style>
