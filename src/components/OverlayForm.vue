<script setup>
import { useProductStore } from '@/stores/product'
import { useGeneralStore } from '@/stores/general'
import IconBurger from '@/assets/icons/burger.svg'

const productStore = useProductStore()
const generalStore = useGeneralStore()
</script>

<template>
  <div class="p-6 h-full flex flex-col text-lg font-semibold text-gray-700">
    <div class="flex justify-between">
      <h2 class="text-2xl font-bold mb-4">
        {{ productStore.editingId ? 'Edit Product' : 'Add new Product' }}
      </h2>
      <div
        class="cursor-pointer px-2"
        @click="(generalStore.closeDrawer(), productStore.resetForm())"
      >
        ❌
      </div>
    </div>
    <div class="mt-5">
      <label for="title">Name of the product</label>
      <input v-model="productStore.form.title" class="input" name="title" id="title" />

      <label for="description">Ingredients</label>
      <textarea v-model="productStore.form.description" class="input" name="description"></textarea>

      <label class="flex gap-2 mt-2">
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
          <label for="weight">Weight in grams</label>
          <input v-model.number="productStore.form.weight" class="input" name="weight" />
        </div>
        <div class="flex flex-col flex-1">
          <label for="calories">Calories</label>
          <input v-model.number="productStore.form.calories" class="input" name="calories" />
        </div>
      </div>
      <label for="price">Price of the product</label>
      <input v-model.number="productStore.form.price" class="input" name="price" />
    </div>

    <div class="mt-auto mb-4 flex gap-2">
      <button
        @click="(productStore.saveProduct(), generalStore.closeDrawer())"
        class="bg-zinc-800 py-3 gap-3 flex justify-center items-center w-full rounded-lg text-white text-base"
      >
        <div class="flex gap-1 justify-center items-center">
           <span>+</span>
          <IconBurger class="w-5  pt-1 fill-white" />
        </div>
        <p>Add product to the menu</p>
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

input[type='checkbox']:checked {
  background-color: rgba(3, 170, 58, 0.629);
  border-radius: 20%;
}
</style>
