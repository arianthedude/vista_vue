<template>
  <aside class="w-48 overflow-hidden   min-h-screen flex flex-col">
    <div class="flex p-5 mt-5 pb-20 gap-1 items-center">
      <IconAvocado class="w-5 text-green-400" />
      <h2 class="font-semibold text-lg">avoburger</h2>
    </div>
    <nav class="flex flex-1 w-full">
      <ul class="flex flex-col w-full font-semibold text-gray-700">
        <li>
          <router-link to="/">
            <IconDashboard class="icon" />
            <span>Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/orders">
            <IconBasket class="icon" />
            <span>Orders</span>
          </router-link>
        </li>
        <li>
          <router-link to="/products">
            <IconBurger class="icon" />
            <span>Products</span>
          </router-link>
        </li>
        <li>
          <router-link to="/restaurants">
            <IconMap class="icon" />
            <span>Restaurants</span>
          </router-link>
        </li>
        <li>
          <router-link to="/drivers">
            <IconDrivers class="icon" />
            <span>Drivers</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="flex flex-col items-center justify-center ">
      <p class="text-sm my-3 text-gray-500">Done for the day?</p>
      <PrimaryBtn class=" mx-5 mb-5">
        <IconSend class="inline w-4 mr-2" />
        <span>Send daily report</span>
      </PrimaryBtn>
    </div>
    <div class="profile py-5 px-5 border-t w-full flex items-center ">
        <UserProfile
          :user="{
            name: 'name here',
            role: 'Administrator',
            avatar: userAvatar,
          }"
        />
    </div>
  </aside>
</template>

<script setup>
import IconAvocado from '@/assets/icons/avocado.svg'
import IconDashboard from '@/assets/icons/dashboard.svg'
import IconBasket from '@/assets/icons/basket.svg'
import IconBurger from '@/assets/icons/burger.svg'
import IconMap from '@/assets/icons/map.svg'
import IconDrivers from '@/assets/icons/driver.svg'
import PrimaryBtn from './PrimaryBtn.vue'
import IconSend from '@/assets/icons/send.svg'
import UserProfile from './UserProfile.vue'
import userAvatar from "@/assets/images/user.webp";

</script>

<style scoped>
a {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 10px 20px;
}

.icon {
  width: 20px;
}

.router-link-active {
  background-color: #10b98115;
  border-inline-end: 2px solid rgba(16, 185, 129, 0.736);
}
.router-link-exact-active {
}
</style>
