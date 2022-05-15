import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Grid from '../views/Grid.vue'
import MyPage from '../views/MyPage.vue'
import DetailView from '../views/DetailView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
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
    path: '/mypage',
    name: 'mypage',
    component: MyPage
  },
  {
    path : '/DetailView/:id',
    name : 'DetailView',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue'),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
