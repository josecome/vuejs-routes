import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/folder',
      name: 'home_folder',
      component: HomeView
    },
    {
      path: '/folder/sub_folder',
      name: 'home_folder_sub_folder',
      component: HomeView
    },
    {
      path: '/param/:id',
      name: 'param',
      component: HomeView
    },
    {
      path: '/param/:id',
      name: 'param',
      component: HomeView
    },
    {
      path: '/protected_1',
      name: 'protected_1',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/protected_2',
      name: 'protected_2',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
