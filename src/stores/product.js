// src/stores/productStore.js
import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import mainCourses from '@/mock/products.json'
import sideDishes from '@/mock/side_dishes.json'
import drinks from '@/mock/drinks.json'
import others from '@/mock/others.json'
import { useGeneralStore } from './general'

export const useProductStore = defineStore('products', () => {
  const generalStore = useGeneralStore()

  // 🔹 Data per tab
  const mainCourseItems = ref([...mainCourses])
  const sideDishItems = ref([...sideDishes])
  const drinkItems = ref([...drinks])
  const otherItems = ref([...others])

  // 🔹 Map tab name → items
  const items = computed(() => {
    switch (generalStore.activeTab) {
      case 'MainCourseTab':
        return mainCourseItems.value
      case 'SideDishTab':
        return sideDishItems.value
      case 'DrinkTab':
        return drinkItems.value
      case 'OtherTab':
        return otherItems.value
      default:
        return []
    }
  })

  const editingId = ref(null)

  const form = reactive({
    title: '',
    weight: 0,
    description: '',
    price: 0,
    vegan: false,
    img: 'src/assets/images/burger-1.png',
  })

  function resetForm() {
    Object.assign(form, {
      title: '',
      weight: 0,
      description: '',
      price: 0,
      vegan: false,
      img: 'src/assets/images/burger-1.png',
    })
    editingId.value = null
  }

  function startEdit(product) {
    editingId.value = product.id
    Object.assign(form, product)
  }

  function saveProduct() {
    if (editingId.value === null) {
      items.value.push({
        id: Date.now(),
        ...form,
      })
    } else {
      const index = items.value.findIndex(
        item => item.id === editingId.value
      )

      if (index !== -1) {
        items.value[index] = {
          ...items.value[index],
          ...form,
        }
      }
    }

    resetForm()
  }

  return {
    // exposed
    items,
    form,
    editingId,
    startEdit,
    saveProduct,
    resetForm,
  }
})