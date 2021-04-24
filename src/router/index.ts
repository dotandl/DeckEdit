import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Properties from '../views/Properties.vue'
import WhiteCards from '../views/WhiteCards.vue'
import BlackCards from '../views/BlackCards.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Properties',
    component: Properties,
  },
  {
    path: '/white-cards',
    name: 'WhiteCards',
    component: WhiteCards,
  },
  {
    path: '/black-cards',
    name: 'BlackCards',
    component: BlackCards,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
