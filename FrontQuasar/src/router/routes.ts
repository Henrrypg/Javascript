import { RouteConfig } from 'vue-router'
import store from '../store/authentication.js'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ],
    beforeEnter(to, from, next) {
      if (store.getters.isLoggedIn(store.state)) {
        next()
        return
      }
      next('/login')
    }
  },
  {
    path: '/register',
    component: () => import('pages/register.vue'),
  },
  {
    path: '/login',
    component: () => import('pages/login.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]


export default routes
