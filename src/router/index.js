import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Grid from '../views/Grid.vue'
import Login from '../views/Login.vue'
import SS from '../views/SS.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/grid',
    name: 'grid',
    component: Grid
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/ss',
    name: 'ss',
    component: SS
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
