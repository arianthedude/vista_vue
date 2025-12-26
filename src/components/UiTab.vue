<template>
  <div>
    <!-- Tabs -->
    <div class="flex ps-10 bg-white p-5 mt-10 rounded-2xl gap-8">
      <button
        v-for="(tab, index) in tabs"
        :key="tab.name"
        ref="tabRefs"
        role="tab"
        :tabindex="generalStore.activeTab === tab.name ? 0 : -1"
        @click="setTab(tab.name)"
        @keydown="onKeydown($event, index)"
        :class="[
          'cursor-pointer relative outline-none',
          generalStore.activeTab === tab.name ? 'font-bold' : '',
        ]"
      >
        <span>{{ tab.label }}</span>

        <span
          v-if="generalStore.activeTab === tab.name"
          class="w-full border-b-2 absolute -bottom-5 left-0"
        />
      </button>
    </div>

    <!-- Active Tab Content -->
    <div class="grid grid-cols-12 mt-10 w-full gap-5">
      <component :is="activeComponent" :search="search" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useGeneralStore } from '@/stores/general'

import MainCourseTab from '@/components/tabs/MainCourseTab.vue'
import SideDishTab from '@/components/tabs/SideDishTab.vue'
import DrinkTab from '@/components/tabs/DrinkTab.vue'
import OtherTab from '@/components/tabs/OtherTab.vue'

defineProps({
  search: String,
})

const generalStore = useGeneralStore()
const tabRefs = ref([])

const tabs = [
  { name: 'MainCourseTab', label: 'Main course', component: MainCourseTab },
  { name: 'SideDishTab', label: 'Side dishes', component: SideDishTab },
  { name: 'DrinkTab', label: 'Drinks', component: DrinkTab },
  { name: 'OtherTab', label: 'Other', component: OtherTab },
]

const activeComponent = computed(() => {
  return tabs.find(tab => tab.name === generalStore.activeTab)?.component
})

function setTab(name) {
  generalStore.activeTab = name
}

function onKeydown(e, index) {
  if (e.key === 'Tab') {
    e.preventDefault()

    const nextIndex = (index + 1) % tabs.length
    generalStore.activeTab = tabs[nextIndex].name

    nextTick(() => {
      tabRefs.value[nextIndex].focus()
    })
  }
}
</script>