import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        userInfo: {} as any
    }),

    getters: {
        getUserInfo: (state) =>  state.userInfo
    },

    actions: {
        setUserInfo(data: any) {
            this.userInfo = data
        }
    },
    // 开启数据缓存
    persist: {
        key: 'user',
        storage: window.localStorage,
    }
})