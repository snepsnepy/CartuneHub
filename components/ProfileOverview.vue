<template>
  <div>
    <p class="px-2 text-base-content text-md tracking-wider">
      Profile Overview
    </p>
    <div class="divider m-0"></div>
    <div
      class="flex flex-col w-full p-4 mt-2 gap-y-4 backdrop-blur-2xl ring-1 ring-white/20 bg-white/10 rounded-3xl"
    >
      <div class="flex m-auto items-center justify-between w-full">
        <p class="text-primary-content text-2xl font-bold">
          Savulescu <br />
          Mihnea Alexandru
        </p>
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-16 rounded-full">
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

      <div class="flex flex-col gap-y-1">
        <div class="flex w-full m-auto items-center gap-x-1">
          <p class="text-primary-content text-sm">snepsoftware@gmail.com</p>

          <Icon
            name="icon-park-solid:check-one"
            class="w-4 h-4 text-secondary"
          />
        </div>
        <!-- <div class="flex w-full m-auto items-center gap-x-1">
            <p class="text-primary-content text-sm">+40 726 374 419</p>

            <Icon
              name="emojione-v1:flag-for-romania"
              class="w-4 h-4 text-secondary"
            />
          </div> -->
      </div>

      <div
        class="flex ring-1 ring-white/20 bg-black/40 justify-around rounded-3xl py-4"
      >
        <div class="text-center">
          <p class="text-primary-content">Listings</p>
          <p class="text-primary text-2xl font-bold">10</p>
        </div>
        <div class="text-center">
          <p class="text-primary-content">Sold</p>
          <p class="text-primary text-2xl font-bold">3</p>
        </div>
        <div class="text-center">
          <p class="text-primary-content">Saved</p>
          <p class="text-primary text-2xl font-bold">5</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
