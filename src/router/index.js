import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
