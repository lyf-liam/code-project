import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from '../views/MainBox.vue'
import RoutesConfig from './config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
        path: '/mainbox',
        name: 'mainbox',
        component: MainBox
        // mainbox的嵌套路由，后面根据权限动态添加
    }
  ]
})

RoutesConfig.forEach(item=>{
    router.addRoute("mainbox",item)
})

export default router
