import router from "@/router/index";
import { getToken } from '@/utils/cookies'
import { getMenu } from "@/api/menu/index";
import { usePermissionStore } from "@/store/permission";
import { useSettingStore } from '@/store/setting'
import { createRoutes } from "@/utils/createRoutes";
import { useAxiosStore } from '@/store/axios'

router.beforeEach(async (to, from, next) => {
    const permission = usePermissionStore();
    const axiosStore = useAxiosStore()
    const { getIsDynamicMenu } = useSettingStore()
    axiosStore.cancelToken()

    // 未登录拦截
    if (getToken()) {
        // 登录之后禁止访问登录页面
        if (to.path === '/login') {
            next('/')
        } else {
            // 动态菜单
            if (getIsDynamicMenu) {
                // 刷新白屏需要重新拦截添加路由
                if (permission.hasAsyncRouter) {
                    next()
                } else {
                    const res = await getMenu()
                    // 处理后端路由数据
                    const routers = createRoutes(res.data, { children: 'child', index: 'sort' })
                    routers.forEach(item => {
                        router.addRoute(item)
                    })
                    permission.setAsyncRouterMark()
                    // 解决路由未动态添加完成就访问造成的白屏问题
                    next({ ...to, replace: true })
                    console.log('beforeEach', router.getRoutes());
                }
            } else {
                next()
            }
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next('/login')
        }
    }
})