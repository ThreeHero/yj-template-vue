import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/layout'
// pages下布局内容路由文件
import { addRoutes, routeGuard } from './utils'

const Login = () => import('@/layout/login.vue')

// 必须有home
const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: '/home'
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

addRoutes(router)
routeGuard(router)

export default router
