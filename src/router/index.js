// Router Import Config
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage,
  } 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})



export default router
