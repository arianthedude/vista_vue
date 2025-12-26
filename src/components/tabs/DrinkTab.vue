<template>
  <div v-for="value in filteredItems" :key="value.id" class="col-span-6 lg:col-span-3">
    <ProductCard :product="value" />
  </div>

  <div
    class="border-2 cursor-pointer min-h-60 border-gray-400/50 text-gray-700 col-span-6 rounded-xl lg:col-span-3 h-full flex flex-col justify-center items-center"
    @click="generalStore.openDrawer()"
  >
    <p class="text-xl font-bold">+</p>
    <p class="text-xl font-bold text-center">Add new product</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useGeneralStore } from '@/stores/general'
import { useProductStore } from '@/stores/product'

const props = defineProps({
  search: String,
})

const generalStore = useGeneralStore()
const productStore = useProductStore()

const filteredItems = computed(() => {
  if (!props.search) return productStore.items

  const q = props.search.toLowerCase()

  return productStore.items.filter(
    (item) => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q),
  )
})
</script>
