<template>
  <div :class="{ sidebar: true, open: isOpened }" :style="cssVars">
    <div class="logo-details pl-4 mt-4">
      <img src="/img/logo.png" alt="menu-logo" class="menu-logo icon" />

      <div class="logo_name">CARTUNEHUB</div>
      <i
        class="bx"
        :class="isOpened ? 'bx-menu-alt-right pr-2' : 'bx-menu mx-4'"
        id="btn"
        @click="toggleSidebar"
      />
    </div>

    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        max-height: calc(100% - 60px);
      "
    >
      <div id="my-scroll" class="px-4">
        <ul class="nav-list" style="overflow: visible">
          <li
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :id="'links_' + index"
          >
            <router-link :to="menuItem.link!">
              <i class="bx" :class="menuItem.icon"></i>
              <span class="links_name">{{ menuItem.name }}</span>
              <span
                :data-target="'links_' + index"
                class="tooltip bg-red-300"
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
import { ref, computed, onMounted } from "vue";

const emit = defineEmits([
  "search-input-emit",
  "button-exit-clicked",
  "menuItemClicked",
]);

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
    icon: "bx-grid-alt",
  },
  {
    link: "/products",
    name: "Products",
    tooltip: "User",
    icon: "bx-user",
  },
  {
    link: "#",
    name: "Messages",
    tooltip: "Messages",
    icon: "bx-chat",
  },
  {
    link: "#",
    name: "Analytics",
    tooltip: "Analytics",
    icon: "bx-pie-chart-alt-2",
  },
  {
    link: "#",
    name: "File Manager",
    tooltip: "Files",
    icon: "bx-folder",
  },
  {
    link: "#",
    name: "Order",
    tooltip: "Order",
    icon: "bx-cart-alt",
  },
  {
    link: "#",
    name: "Saved",
    tooltip: "Saved",
    icon: "bx-heart",
  },
  {
    link: "#",
    name: "Setting",
    tooltip: "Setting",
    icon: "bx-cog",
  },
];

const tooltipAttached = () => {
  const tooltips = document.querySelectorAll(".tooltip");
  tooltips.forEach((tooltip) => {
    document.body.appendChild(tooltip);
  });

  document.querySelectorAll(".tooltip").forEach((tooltip) => {
    if (tooltip instanceof HTMLElement) {
      const targetID = tooltip.dataset.target;
      const target = document.querySelector(`#${targetID}`);
      if (!target) return;
      target.addEventListener("mouseenter", () => {
        const targetPosition = target.getBoundingClientRect();
        if (isOpened.value) return;
        tooltip.style.top = `${targetPosition.top + window.scrollY}px`;
        tooltip.style.left = `${
          targetPosition.left + targetPosition.width + 20
        }px`;
        tooltip.classList.add("active");
      });
      target.addEventListener("mouseleave", () => {
        tooltip.classList.remove("active");
      });
    }
  });
};

const isOpened = ref(false);
const menuClosedPaddingLeftBody = "78px";

const toggleSidebar = () => {
  isOpened.value = !isOpened.value;
};

// CSS Variables
const bgColor = "#11101d";
const secondaryColor = "#1d1b31";
const homeSectionColor = "#e4e9f7";
const logoTitleColor = "#fff";
const iconsColor = "#fff";
const itemsTooltipColor = "#e4e9f7";
const searchInputTextColor = "#fff";
const menuItemsHoverColor = "#fff";
const menuItemsTextColor = "#fff";
const menuFooterTextColor = "#fff";

const cssVars = computed(() => ({
  "--bg-color": bgColor,
  "--secondary-color": secondaryColor,
  "--home-section-color": homeSectionColor,
  "--logo-title-color": logoTitleColor,
  "--icons-color": iconsColor,
  "--items-tooltip-color": itemsTooltipColor,
  "--search-input-text-color": searchInputTextColor,
  "--menu-items-hover-color": menuItemsHoverColor,
  "--menu-items-text-color": menuItemsTextColor,
  "--menu-footer-text-color": menuFooterTextColor,
}));

onMounted(() => {
  document.body.style.paddingLeft = menuClosedPaddingLeftBody;
  tooltipAttached();
});

// Props
defineProps<{
  profileImg?: string;
  profileName?: string;
  profileRole?: string;
  isExitButton?: boolean;
  isLoggedIn?: boolean;
}>();
</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");

.tooltip {
  position: absolute;
  /* top: -20px; */
  /* left: calc(100% + 15px); */
  z-index: 3;
  background: transparent;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
  @apply text-primary;
}

.tooltip.active {
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  /* top: 50%; */
  transform: translateY(25%);
}

.sidebar.open li .tooltip {
  display: none;
}

.sidebar {
  @apply flex flex-col fixed left-8 top-1/4 min-h-min w-20 rounded-3xl bg-primary  z-[99] transition-all ease-linear duration-300;
}

.sidebar.open {
  @apply w-64;
}

.sidebar .logo-details {
  @apply flex items-center relative h-16;
}

.sidebar .logo-details .icon {
  @apply opacity-0 transition-all ease-linear duration-300;
}

.sidebar .logo-details .logo_name {
  @apply text-black text-base font-semibold opacity-0 transition-all ease-linear duration-300;
}

.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name {
  @apply opacity-100;
}

.sidebar .logo-details #btn {
  @apply absolute top-1/2 right-0 -translate-y-1/3 text-2xl text-center cursor-pointer transition-all ease-linear duration-300;
}

.sidebar.open .logo-details #btn {
  @apply text-right;
}

.sidebar i {
  @apply text-black bg-transparent h-12 min-w-12 text-2xl text-center;
}

.sidebar .nav-list {
  @apply mt-5;
}

.sidebar li {
  @apply relative my-2 mx-0 list-none;
}

.sidebar li a {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: transparent;
}

.sidebar li a:hover {
  background: var(--menu-items-hover-color);
}

.sidebar li a .links_name {
  color: black;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}

.sidebar.open li a .links_name {
  opacity: 1;
  pointer-events: auto;
}

.sidebar li a:hover .links_name,
.sidebar li a:hover i {
  transition: all 0.5s ease;
  color: var(--bg-color);
}

.sidebar li router-link {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: var(--bg-color);
}

.sidebar li router-link:hover {
  background: var(--menu-items-hover-color);
}

.sidebar li router-link .links_name {
  color: var(--menu-items-text-color);
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}

.sidebar.open li router-link .links_name {
  opacity: 1;
  pointer-events: auto;
}

.sidebar li router-link:hover .links_name,
.sidebar li router-link:hover i {
  transition: all 0.5s ease;
  color: var(--bg-color);
}

.sidebar li i {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
}

.sidebar div img {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 10px;
}

.my-scroll-active {
  overflow-y: auto;
}

#my-scroll {
  overflow-y: auto;
  height: calc(100% - 60px);
}

#my-scroll::-webkit-scrollbar {
  display: none;
}
</style>
