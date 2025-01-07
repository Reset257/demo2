import request from "@/utils/request";
import { IResultType } from '../interface'

export const getMenu = (params?: any) => {
    return request<IResultType>({
        url: '/mockApi/m2/2414443-0-default/97220172',
        method: 'get',
        params
    })
}