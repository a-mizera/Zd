import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OfferView from '../views/OfferView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/offer',
    name: 'offer',
    component: OfferView
  },
  {
    path:'/contact',
    name:'contact',
    component: OfferView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
