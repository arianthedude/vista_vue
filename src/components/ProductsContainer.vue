<template>
  <div class="grid grid-cols-12 w-full py-5 px-5 h-full p-5 gap-4">
    <div class="col-span-6" v-for="value in products" :key="value.id">
      {{ value.name }}
    </div>
  </div>
</template>

<script setup>
import products from '@/mock/products.json'
</script>
