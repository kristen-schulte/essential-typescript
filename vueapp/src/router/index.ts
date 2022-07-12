import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import ProductList from "@/views/ProductList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/products',
    component: ProductList
  },
  {
    path: '/',
    redirect: '/products'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
