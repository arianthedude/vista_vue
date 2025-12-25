<template>
  <div>
    <main class="grid grid-cols-12 h-full w-full">
      <side-nav class="hidden lg:col-span-2" />
      <div class="md:col-span-10 col-span-12 px-5 pt-5 pb-10">
        <header>
          <search-bar  @update:search="search = $event" />
        </header>
        <ui-tab :search="search" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import SearchBar from './SearchBar.vue'
import SideNav from './SideNav.vue'
import UiTab from './UiTab.vue'

const search = ref('')
</script>
