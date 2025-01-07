import { RouteRecordRaw } from 'vue-router'

// 通用路由
export const commonRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login/index.vue'),
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/view/login/404.vue'),
    },   
]
