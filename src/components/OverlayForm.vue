<script setup>
import { useProductStore } from '@/stores/product'
import { useGeneralStore } from '@/stores/general'

const productStore = useProductStore()
const generalStore = useGeneralStore()
</script>

<template>
  <div class="p-6 h-full flex flex-col">
    <h2 class="text-xl font-bold mb-4">Add Product</h2>

    <input v-model="productStore.form.title" placeholder="Title" class="input" />
    <input v-model.number="productStore.form.weight" placeholder="Weight" class="input" />
    <textarea v-model="productStore.form.description" placeholder="Description" class="input" />
    <input v-model.number="productStore.form.price" placeholder="Price" class="input" />

    <label class="flex gap-2 mt-2">
      <input type="checkbox" v-model="productStore.form.vegan" />
      Vegan
    </label>

    <div class="mt-auto flex gap-2">
      <button
        @click="
          generalStore.closeDrawer(),
          productStore.resetForm()
        "
        class="btn-secondary"
      >
        Cancel
      </button>

      <button
        @click="
          productStore.addProduct(),
          generalStore.closeDrawer()
        "
        class="btn-primary"
      >
        Save
      </button>
    </div>
  </div>
</template>
