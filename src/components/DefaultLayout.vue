<template>
  <div>
    <main class="grid grid-cols-12 h-full w-full">
      <side-nav class="hidden lg:col-span-2" />
      <div class="md:col-span-10 col-span-12 ">
        <header class="px-5">
            <search-bar />
        </header>
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import SearchBar from './SearchBar.vue';
import SideNav from './SideNav.vue'
</script>
