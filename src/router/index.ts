import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const route = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.getElementById(to.hash.substring(1))
      if (element) {
        const offset = 80 // Example of a fixed offset
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset

        return new Promise(resolve => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
          resolve()
        })
      } else {
        return { top: 0 }
      }
    }
    return savedPosition || { top: 0 }
  },
})

export default router
