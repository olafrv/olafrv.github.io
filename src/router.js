import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/soccer',
      component: () => import('@/views/Soccer.vue'),
    },
    {
      path: '/projects',
      component: () => import('@/views/Projects.vue'),
    },
    {
      path: '/trending',
      component: () => import('@/views/Trending.vue'),
    },
    {
      path: '/resume',
      component: () => import('@/views/Resume.vue'),
    },
  ],
})