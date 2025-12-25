<template>
  <div>
    <div class="flex ps-10 bg-white p-5 mt-10 rounded-2xl  gap-8">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        @click="activeTab = tab"
        :class="activeTab.name === tab.name ? 'font-bold relative ' : ''"
        class="cursor-pointer"
      >
        <span>{{ tab.label }}</span>
        <span v-if="activeTab.name === tab.name" class="w-full border-b border-2 absolute -bottom-5 left-0"></span>
      </button>
    </div>
    <div class="grid grid-cols-12 mt-10 w-full gap-5">
      <component :is="activeTab.component" class="mt-4" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import MainCourseTab from '@/components/tabs/MainCourseTab.vue'
import SideDishTab from '@/components/tabs/SideDishTab.vue'
import DrinkTab from '@/components/tabs/DrinkTab.vue'
import OtherTab from '@/components/tabs/OtherTab.vue'

const tabs = [
  { name: 'MainCourseTab', label: 'Main course', component: MainCourseTab },
  { name: 'SideDishTab', label: 'Side dishes', component: SideDishTab },
  { name: 'DrinkTab', label: 'Drinks', component: DrinkTab },
  { name: 'other', label: 'Other', component: OtherTab },
]

const activeTab = ref(tabs[0])
</script>
