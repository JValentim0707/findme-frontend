// Router Import Config
import { createRouter, createWebHistory } from 'vue-router'
import { authValidation } from '@/middlewares/auth'


// Import Components
import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import AdminHomePage from '@/pages/AdminHomePage.vue'
import WorkerHomePage from '@/pages/WorkerHomePage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/register',
    component: RegisterPage,
  },
  {
    path: '/adminHome',
    component: AdminHomePage,
    beforeEnter: async (to, from) => {
      // reject the navigation
      const validateAuth = await authValidation()
      if (!validateAuth) {
        router.push('/login')
        return validateAuth
      }
      return validateAuth
    },
  },
  {
    path: '/workerHome',
    component: WorkerHomePage,
    beforeEnter: async (to, from) => {
      // reject the navigation
      const validateAuth = await authValidation()
      if (!validateAuth) {
        router.push('/login')
        return validateAuth
      }
      return validateAuth
    },
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})



export default router
