<template>
  <div class="bg-white rounded-2xl w-full p-4 h-full max-h-80 flex flex-col items-center">
    <div class="relative w-full flex justify-center h-20">
      <img class="absolute -top-10 w-40" :src="product.img" alt="" />
      <div
        v-if="product.vegan"
        class="absolute top-0 right-0 text-white text-xs px-2 py-1 rounded-full"
      >
        <IconLeaf class="w-6 rotate-x-45 fill-green-500" />
      </div>
    </div>
    <p class="font-bold text-lg">{{ product.title }}</p>
    <span class="text-sm text-gray-500">{{ product.weight }}g</span>
    <p class="text-sm flex-1 px-4 text-gray-700">{{ product.description }}</p>
    <div class="flex w-full pt-4 justify-between">
      <p class="text-xl font-medium">${{ product.price }}</p>
      <div class="flex justify-center items-center gap-2">
        <div class="border rounded-md py-2 px-3 border-gray-300 flex justify-center items-center cursor-pointer">
          <IconSettings class="w-4 h-4 fill-gray-800 " />
        </div>
        <div class="border rounded-md py-2 px-3 border-gray-300 flex justify-center items-center cursor-pointer">
          <IconView class="w-4 h-4 fill-gray-800" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconSettings from '@/assets/icons/settings.svg'
import IconView from '@/assets/icons/view.svg'
import IconLeaf from '@/assets/icons/leaf.svg'
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
