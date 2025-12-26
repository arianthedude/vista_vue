import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useGeneralStore = defineStore('general', () => {
  const isDrawerOpen = ref(false)
  const activeTab = ref('MainCourseTab')

  function openDrawer() {
    isDrawerOpen.value = true
  }

  function closeDrawer() {
    isDrawerOpen.value = false
  }

  function toggleDrawer() {
    isDrawerOpen.value = !isDrawerOpen.value
  }

  return { activeTab, isDrawerOpen, openDrawer, closeDrawer, toggleDrawer }
})