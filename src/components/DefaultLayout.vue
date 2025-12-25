<template>
  <div>
    <main class="grid grid-cols-12 h-full w-full">
      <side-nav class="hidden lg:col-span-2" />
      <div class="md:col-span-10 col-span-12 px-5 pt-5 pb-10">
        <header>
          <search-bar @update:search="search = $event" />
        </header>
        <ui-tab :search="search" />
      </div>
      <!-- Overlay -->
      <div
        v-if="generalStore.isDrawerOpen"
        class="fixed inset-0 bg-black/40 z-40"
        @click="generalStore.isDrawerOpen = false"
      />

      <!-- Drawer -->
      <div
        class="fixed top-0 right-0 h-full w-full sm:w-105 bg-white z-50 transform transition-transform duration-300"
        :class="generalStore.isDrawerOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <overlay-form @close="generalStore.isDrawerOpen = false" @save="addProduct(e)" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import SearchBar from './SearchBar.vue'
import SideNav from './SideNav.vue'
import UiTab from './UiTab.vue'
import OverlayForm from './OverlayForm.vue'
import { useGeneralStore } from '@/stores/general'

const search = ref('')
const generalStore = useGeneralStore()
function addProduct(e) {
  console.log(e)
}

</script>
