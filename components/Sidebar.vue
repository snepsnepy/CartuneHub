<template>
  <div :class="{ sidebar: true, open: isOpened }" :style="cssVars">
    <div class="logo-details" style="margin: 6px 14px 0 14px">
      <img
        v-if="menuLogo"
        :src="menuLogo"
        alt="menu-logo"
        class="menu-logo icon"
      />
      <i v-else :class="['bx', menuIcon, 'icon']" />
      <div class="logo_name">{{ menuTitle }}</div>
      <i
        class="bx"
        :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'"
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
      <div id="my-scroll" style="margin: 6px 14px 0 14px">
        <ul class="nav-list" style="overflow: visible">
          <li v-if="isSearch" @click="isOpened = true" id="links_search">
            <i class="bx bx-search" />
            <input
              type="text"
              :placeholder="searchPlaceholder"
              @input="handleSearchInput!"
            />
            <span class="tooltip" data-target="links_search">{{
              searchTooltip
            }}</span>
          </li>

          <li
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :id="'links_' + index"
          >
            <router-link v-if="isUsedVueRouter" :to="menuItem.link!">
              <i class="bx" :class="menuItem.icon || 'bx-square-rounded'"></i>
              <span class="links_name">{{ menuItem.name }}</span>
            </router-link>
            <a
              v-else
              @click.stop.prevent="emit('menuItemClicked', menuItem.link)"
              :href="menuItem.link"
            >
              <i class="bx" :class="menuItem.icon || 'bx-square-rounded'"></i>
              <span class="links_name">{{ menuItem.name }}</span>
            </a>
            <span :data-target="'links_' + index" class="tooltip">{{
              menuItem.tooltip || menuItem.name
            }}</span>
          </li>
        </ul>
      </div>

      <div v-if="isLoggedIn" class="profile">
        <div class="profile-details">
          <img v-if="profileImg" :src="profileImg" alt="profileImg" />
          <i v-else class="bx bxs-user-rectangle" />
          <div class="name_job">
            <div class="name">{{ profileName }}</div>
            <div class="job">{{ profileRole }}</div>
          </div>
        </div>
        <i
          v-if="isExitButton"
          class="bx bx-log-out"
          id="log_out"
          @click.stop="emit('button-exit-clicked')"
        />
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

const isOpened = ref(false);

const toggleSidebar = () => {
  isOpened.value = !isOpened.value;
};

const handleSearchInput = (event: InputEvent) => {
  emit("search-input-emit", (event.target as HTMLInputElement).value);
};

watch(
  () => isOpened.value,
  () => {
    document.body.style.paddingLeft =
      isOpened.value && props.isPaddingLeft
        ? props.menuOpenedPaddingLeftBody!
        : props.menuClosedPaddingLeftBody!;
  }
);

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
  document.body.style.paddingLeft = props.menuClosedPaddingLeftBody!;
});

// Props
const props = defineProps<{
  isUsedVueRouter?: boolean;
  menuTitle?: string;
  menuLogo?: string;
  menuIcon?: string;
  isPaddingLeft?: boolean;
  menuOpenedPaddingLeftBody?: string;
  menuClosedPaddingLeftBody?: string;
  isSearch?: boolean;
  searchPlaceholder?: string;
  searchTooltip?: string;
  profileImg?: string;
  profileName?: string;
  profileRole?: string;
  isExitButton?: boolean;
  isLoggedIn?: boolean;
  bgColor?: string;
  secondaryColor?: string;
  homeSectionColor?: string;
  logoTitleColor?: string;
  iconsColor?: string;
  itemsTooltipColor?: string;
  searchInputTextColor?: string;
  menuItemsHoverColor?: string;
  menuItemsTextColor?: string;
  menuFooterTextColor?: string;
}>();

// Props destructuring
const {
  isUsedVueRouter,
  menuTitle,
  menuLogo,
  menuIcon,
  isSearch,
  searchPlaceholder,
  searchTooltip,
  profileImg,
  profileName,
  profileRole,
  isExitButton,
  isLoggedIn,
} = props;
</script>

<!-- Add scoped styles or use CSS modules -->
<style scoped>
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");
/* Add scoped styles or use CSS modules */
.sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  min-height: min-content;
  width: 78px;
  background: var(--bg-color);
  z-index: 99;
  transition: all 0.5s ease;
}

.sidebar.open {
  width: 250px;
}

.sidebar .logo-details {
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}

.sidebar .logo-details .icon {
  opacity: 0;
  transition: all 0.5s ease;
}

.sidebar .logo-details .logo_name {
  color: var(--logo-title-color);
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
}

.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name {
  opacity: 1;
}

.sidebar .logo-details #btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}

.sidebar.open .logo-details #btn {
  text-align: right;
}

.sidebar i {
  color: var(--icons-color);
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}

.sidebar .nav-list {
  margin-top: 20px;
}

.sidebar li {
  position: relative;
  margin: 8px 0;
  list-style: none;
}

.tooltip {
  position: absolute;
  z-index: 3;
  background: var(--items-tooltip-color);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
}

.tooltip.active {
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  transform: translateY(25%);
}

.sidebar.open li .tooltip {
  display: none;
}

.sidebar input {
  font-size: 15px;
  color: var(--serach-input-text-color);
  font-weight: 400;
  outline: none;
  height: 50px;
  width: 100%;
  width: 50px;
  border: none;
  border-radius: 12px;
  transition: all 0.5s ease;
  background: var(--secondary-color);
}

.sidebar.open input {
  padding: 0 20px 0 50px;
  width: 100%;
}

.sidebar .bx-search {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 22px;
  background: var(--secondary-color);
  color: var(--icons-color);
}

.sidebar.open .bx-search:hover {
  background: var(--secondary-color);
  color: var(--icons-color);
}

.sidebar .bx-search:hover {
  background: var(--menu-items-hover-color);
  color: var(--bg-color);
}

.sidebar li a {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: var(--bg-color);
}

.sidebar li a:hover {
  background: var(--menu-items-hover-color);
}

.sidebar li a .links_name {
  color: var(--menu-items-text-color);
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

.sidebar div.profile {
  position: relative;
  height: 60px;
  width: 78px;
  padding: 10px 14px;
  background: var(--secondary-color);
  transition: all 0.5s ease;
  overflow: hidden;
}

.sidebar.open div.profile {
  width: 250px;
}

.sidebar div .profile-details {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.sidebar div img {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 10px;
}

.sidebar div.profile .name,
.sidebar div.profile .job {
  font-size: 15px;
  font-weight: 400;
  color: var(--menu-footer-text-color);
  white-space: nowrap;
}

.sidebar div.profile .job {
  font-size: 12px;
}

.sidebar .profile #log_out {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: var(--secondary-color);
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 0px;
  transition: all 0.5s ease;
}

.sidebar.open .profile #log_out {
  width: 50px;
  background: var(--secondary-color);
  opacity: 0;
}

.sidebar.open .profile:hover #log_out {
  opacity: 1;
}

.sidebar.open .profile #log_out:hover {
  opacity: 1;
  color: red;
}

.sidebar .profile #log_out:hover {
  color: red;
}

.home-section {
  position: relative;
  background: var(--home-section-color);
  min-height: 100vh;
  top: 0;
  left: 78px;
  width: calc(100% - 78px);
  transition: all 0.5s ease;
  z-index: 2;
}

.sidebar.open ~ .home-section {
  left: 250px;
  width: calc(100% - 250px);
}

.home-section .text {
  display: inline-block;
  color: var(--bg-color);
  font-size: 25px;
  font-weight: 500;
  margin: 18px;
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
