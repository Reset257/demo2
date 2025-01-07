import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { commonRoutes } from './common'

const common: Array<RouteRecordRaw> = commonRoutes

const routeModuleList: RouteRecordRaw[] = [];
// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules: any = import.meta.glob('./modules/**/*.ts', { eager: true });

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

const router = createRouter({
  history: createWebHashHistory(),	 // 使用hash模式
  routes: [...common, ...routeModuleList],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router