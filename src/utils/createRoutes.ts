import { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'

// 属性配置映射
const configMap = {
    children: 'children',
    path: 'path',
    name: 'name',
    title: 'title',
    icon: 'icon',
    redirect: 'redirect',
    component: 'component',
    index: 'index',
    // 这个字段用于判断该菜单是类似首页，工作台这种不展开但需要两层路由的菜单(不是区分内页菜单 ❗❗❗)
    isSingleMenu: "isSingleMenu"
}

const modules = import.meta.glob('/src/view/**/*.vue');

// 将接口数据转成对应的路由信息 动态添加
export const createRoutes = (
    data: Record<string, any>[],
    config?: Record<string, string>
): RouteRecordRaw[] => {
    const currentConfig = Object.assign(configMap, config)
    const routes: RouteRecordRaw[] = []

    data.forEach((item: any) => {
        if (item[currentConfig.children] && item[currentConfig.children].length) {
            routes.push({
                path: item[currentConfig.path],
                name: item[currentConfig.name],
                redirect: item.redirect,
                meta: {
                    icon: item[currentConfig.icon],
                    title: item[currentConfig.title],
                    index: item[currentConfig.index]
                },
                component: getComponent(item[currentConfig.component]),
                children: createRoutes(item[currentConfig.children], config)
            })

        } else {
            item[currentConfig.isSingleMenu] ? routes.push({
                path: item[currentConfig.path],
                name: item[currentConfig.name],
                meta: {
                    icon: item[currentConfig.icon],
                    title: item[currentConfig.title],
                    index: item[currentConfig.index],
                    hideMenu: true,
                },
                component: Layout,
                children: [{
                    path: '',
                    component: getComponent(item[currentConfig.component]),
                }]
            }) : routes.push({
                path: item[currentConfig.path],
                name: item[currentConfig.name],
                redirect: item.redirect,
                meta: {
                    icon: item[currentConfig.icon],
                    title: item[currentConfig.title],
                    index: item[currentConfig.index]
                },
                component: getComponent(item[currentConfig.component]),
            })
        }
    });
    return routes
}

const getComponent = (component: string) => {
    return component === 'Layout' ? Layout : modules['/src/view/' + component]
}


