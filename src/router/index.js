import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */'../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ '../views/AboutView.vue')
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "Home" */'../views/Grid.vue')
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () => import(/* webpackChunkName: "Logoin" */'../views/MyPage.vue')
  },
  {
    path : '/DetailView/:contractAddress/:tokenId',
    name : 'DetailView',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue'),
    props: true,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "Logoin" */'../views/Register.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import(/* webpackChunkName: "Logoin" */'../views/UploadNFT.vue')
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: () => import(/* webpackChunkName: "Logoin" */'../views/Redirect.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
