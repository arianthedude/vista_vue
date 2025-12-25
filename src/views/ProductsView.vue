<script setup>
import ProductsContainer from '@/components/ProductsContainer.vue'
import DefaultLayout from '@/components/DefaultLayout.vue'
import ProductCard from '@/components/ProductCard.vue'
import products from '@/mock/products.json'
</script>

<template>
  <div class="">
    <DefaultLayout>
      <ProductsContainer>
        <div class="col-span-6  lg:col-span-3" v-for="value in products" :key="value.id">
          <ProductCard :product="value" />
        </div>
      </ProductsContainer>
    </DefaultLayout>
  </div>
</template>
