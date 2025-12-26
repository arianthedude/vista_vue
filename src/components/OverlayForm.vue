<script setup>
import { useProductStore } from '@/stores/product'
import { useGeneralStore } from '@/stores/general'
import IconBurger from '@/assets/icons/burger.svg'
import { computed } from 'vue'

const productStore = useProductStore()
const generalStore = useGeneralStore()

const isView = computed(() => productStore.mode === 'view')
</script>

<template>
  <div class="p-6 h-full flex flex-col text-lg font-semibold text-gray-700">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold mb-4">
        {{
          productStore.mode === 'view'
            ? 'Product Details'
            : productStore.editingId
              ? 'Edit Product'
              : 'Add New Product'
        }}
      </h2>

      <div
        class="cursor-pointer px-2 text-xl"
        @click="(generalStore.closeDrawer(), productStore.resetForm())"
      >
        ❌
      </div>
    </div>

    <div class="mt-5 space-y-3">
      <label>Name of the product</label>
      <div v-if="isView" class="readonly">
        {{ productStore.form.title }}
      </div>
      <input v-else v-model="productStore.form.title" class="input" />

      <label>Ingredients</label>
      <div v-if="isView" class="readonly">
        {{ productStore.form.description }}
      </div>
      <textarea v-else v-model="productStore.form.description" class="input" />

      <label v-if="isView" class="flex gap-2 items-center mt-2">
        <div class="w-8 h-8 border rounded-md border-gray-300 flex items-center justify-center">
          <span v-if="productStore.form.vegan">✔</span>
          <span v-else>✖</span>
        </div>
        Suitable for Vegans
      </label>
      <label v-if="!isView" class="flex gap-2 mt-2">
        <div class="w-8 h-8 border cursor-pointer rounded-md border-gray-300">
          <input
            type="checkbox"
            class="w-9/12 h-9/12 m-[4px] cursor-pointer appearance-none"
            v-model="productStore.form.vegan"
          />
        </div>
        Suitable for Vegans
      </label>

      <div class="flex gap-4 mt-5">
        <div class="flex flex-col flex-1">
          <label>Weight in grams</label>
          <div v-if="isView" class="readonly">{{ productStore.form.weight }} g</div>
          <input v-else v-model.number="productStore.form.weight" class="input" />
        </div>

        <div class="flex flex-col flex-1">
          <label>Calories</label>
          <div v-if="isView" class="readonly">{{ productStore.form.calories }} kcal</div>
          <input v-else v-model.number="productStore.form.calories" class="input" />
        </div>
      </div>

      <!-- Price -->
      <label>Price</label>
      <div v-if="isView" class="readonly">${{ productStore.form.price }}</div>
      <input v-else v-model.number="productStore.form.price" class="input" />
    </div>

    <!-- Footer -->
    <div v-if="!isView" class="mt-auto mb-4">
      <button
        @click="(productStore.saveProduct(), generalStore.closeDrawer())"
        class="bg-zinc-800 py-3 gap-3 flex justify-center items-center w-full rounded-lg text-white text-base"
      >
        <div class="flex gap-1 items-center">
          <span>+</span>
          <IconBurger class="w-5 pt-1 fill-white" />
        </div>
        <p>{{ productStore.editingId ? 'Update product' : 'Add product to the menu' }}</p>
      </button>
    </div>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #d1d5db;
  border-radius: 0.375rem;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  outline: none;
}

.readonly {
  padding: 0.75rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

input[type='checkbox']:checked {
  background-color: rgba(3, 170, 58, 0.629);
  border-radius: 20%;
}
</style>
