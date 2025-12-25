<template>
  <div class="col-span-6  lg:col-span-3" v-for="value in filteredItems" :key="value.id">
    <ProductCard :product="value" />
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import items from '@/mock/products.json'
import { computed } from 'vue'

const props = defineProps({
  search: String
})

const filteredItems = computed(() => {
  if (!props.search) return items

  const q = props.search.toLowerCase()

  return items.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q)
  )
})
</script>
