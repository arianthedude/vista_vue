import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home ',
        description: 'Welcome to my awesome app',
      },
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
      meta: {
        title: 'Products ',
        description: 'Browse our products',
      },
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: () => import('../views/RestaurantsView.vue'),
      meta: { title: 'Restaurants ' },
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/OrdersView.vue'),
      meta: { title: 'Orders ' },
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: () => import('../views/DriversView.vue'),
      meta: { title: 'Drivers ' },
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title || 'My App'

  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', to.meta.description || 'Default description')
  }
})

export default router
