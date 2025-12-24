<template>
  <aside class="w-40 flex flex-col">
    <div class="flex p-5 mt-5 pb-20 gap-1 items-center">
      <IconAvocado class="w-5 text-green-400" />
      <h2 class="font-semibold">avoburger</h2>
    </div>
    <nav>
      <ul class="flex flex-col  font-semibold text-gray-700">
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
  </aside>
</template>

<script setup>
import IconAvocado from '@/assets/icons/avocado.svg'
import IconDashboard from '@/assets/icons/dashboard.svg'
import IconBasket from '@/assets/icons/basket.svg'
import IconBurger from '@/assets/icons/burger.svg'
import IconMap from '@/assets/icons/map.svg'
import IconDrivers from '@/assets/icons/driver.svg'
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
  border-inline-end: 2px solid rgb(16, 185, 129);
}
.router-link-exact-active {
}
</style>
