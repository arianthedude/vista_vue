<template>
  <div
    class="flex w-full max-w-2xl border-b border-gray-500/20 justify-between items-center py-1 mt-5"
  >
    <IconSearch class="inline w-6 h-6 mr-2 fill-current text-gray-800 stroke-2" />
    <input
      class="w-full outline-none pb-1 placeholder:text-end flex"
      type="text"
      v-model="search"
      @input="$emit('update:search', search)"
      placeholder="Search"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconSearch from '@/assets/icons/search.svg'

defineEmits(['update:search'])

const search = ref('')
</script>
