import request from "@/utils/request";
import { IResultType } from '../interface'

export const getList = (params?: any) => {
    return request<IResultType>({
        url: '/api/user/tenant/page',
        method: 'get',
        params
    })
}
