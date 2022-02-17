import { createRouter, createWebHistory } from 'vue-router'

// import the modules routes
import newRouter from '../modules/news/router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/new',
    ...newRouter,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
