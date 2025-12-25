<template>
  <div class="col-span-6  lg:col-span-3" v-for="value in products" :key="value.id">
    <ProductCard :product="value" />
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import products from '@/mock/products.json'
</script>
