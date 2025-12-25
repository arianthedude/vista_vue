<template>
  <div>
    <div class="flex ps-10 bg-white p-5 mt-10 rounded-2xl gap-8">
      <button
        v-for="(tab, index) in tabs"
        :key="tab.name"
        ref="tabRefs"
        role="tab"
        :tabindex="activeTab.name === tab.name ? 0 : -1"
        @click="setTab(index)"
        @keydown="onKeydown($event, index)"
        :class="[
          'cursor-pointer relative outline-none',
          activeTab.name === tab.name ? 'font-bold' : ''
        ]"
      >
        <span>{{ tab.label }}</span>

        <span
          v-if="activeTab.name === tab.name"
          class="w-full border-b-2 absolute -bottom-5 left-0"
        ></span>
      </button>
    </div>

    <div class="grid grid-cols-12 mt-10 w-full gap-5">
      <component :is="activeTab.component" class="mt-4" :search="search" />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

import MainCourseTab from '@/components/tabs/MainCourseTab.vue'
import SideDishTab from '@/components/tabs/SideDishTab.vue'
import DrinkTab from '@/components/tabs/DrinkTab.vue'
import OtherTab from '@/components/tabs/OtherTab.vue'

defineProps({
  search: String
})

const tabs = [
  { name: 'MainCourseTab', label: 'Main course', component: MainCourseTab },
  { name: 'SideDishTab', label: 'Side dishes', component: SideDishTab },
  { name: 'DrinkTab', label: 'Drinks', component: DrinkTab },
  { name: 'other', label: 'Other', component: OtherTab },
]

const activeTab = ref(tabs[0])
const tabRefs = ref([])

function setTab(index) {
  activeTab.value = tabs[index]
}

function onKeydown(e, index) {
  if (e.key === 'Tab') {
    e.preventDefault()

    const nextIndex = (index + 1) % tabs.length
    activeTab.value = tabs[nextIndex]

    nextTick(() => {
      tabRefs.value[nextIndex].focus()
    })
  }
}
</script>