// 菜单权限模块
import { defineStore } from 'pinia'

export const usePermissionStore = defineStore('permission', {
    state: () => ({
        // 已经获取到动态菜单
        hasAsyncRouter: false
    }),

    getters: {
        getAsyncRouterMark: (state) => state.hasAsyncRouter,
    },

    actions: {
        setAsyncRouterMark() {
            this.hasAsyncRouter = true
        },
    },
})