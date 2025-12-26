<template>
  <div class="flex w-full text-nowrap items-center gap-4">
    <div class="relative">
      <img class="w-8 rounded-full" :src="user.avatar" alt="profile picture" />
      <span class="absolute top-0 right-0 w-2 h-2 bg-green-300 rounded-full"></span>
    </div>
    <p class="text-sm flex flex-1 pb-1 font-medium">{{ user.name }}</p>
    <icon-dots class="w-5 fill-gray-700 cursor-pointer" />
  </div>
</template>

<script setup>
import IconDots from '@/assets/icons/dots.svg'
defineProps({
  user: {
    name: String,
    role: String,
    avatar: String,
  },
})
</script>
