import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
 {
   path:'/dashboard',
   component:()=>import('../views/Dashboard.vue')
 },{
   path:'/myprojects',
   component:()=>import('../views/Projects.vue')
 },{
   path:'/teams',
   component:()=>import('../views/Team.vue')
 },{
   path:'/',
   redirect:'/dashboard'
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
