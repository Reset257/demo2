import { defineStore } from 'pinia'

// 全局设置
export const useSettingStore = defineStore({
    id: 'setting',
    state: () => ({
        // 是否为动态菜单
        isDynamicMenu: true
    }),

    getters: {
        getIsDynamicMenu: (state) => state.isDynamicMenu
    },

    actions: {},

    // 开启数据缓存
    persist: {
        key: 'setting',
        storage: window.localStorage,
    }
})