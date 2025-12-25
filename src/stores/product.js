// src/stores/productStore.js
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import rawProducts from '@/mock/products.json'

export const useProductStore = defineStore('products', () => {
  const items = ref([...rawProducts])

  const form = reactive({
    title: '',
    weight: 0,
    description: '',
    price: 0,
    vegan: false,
    img: 'src/assets/images/burger-1.png'
  })

  function resetForm() {
    Object.assign(form, {
      title: '',
      weight: 0,
      description: '',
      price: 0,
      vegan: false,
      img: 'src/assets/images/burger-1.png'
    })
  }

  function addProduct() {
    items.value.push({
      id: Date.now(),
      ...form
    })
    resetForm()
  }

  return {
    items,
    form,
    addProduct,
    resetForm
  }
})