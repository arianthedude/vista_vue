<template>
  <div>
    <main class="grid grid-cols-12 h-full w-full">
      <side-nav class="col-span-4" />
      <div class="col-span-8 ">
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
