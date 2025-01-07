import { defineStore } from 'pinia'

// 全局设置
export const useAxiosStore = defineStore({
    id: 'axios',
    state: () => ({
        cancel: undefined
    } as any),

    getters: {},

    actions: {
        setCancelToken(c: any) {
            this.cancel = c
        },
        cancelToken() {
            this.cancel && this.cancel()
        },
    },
})