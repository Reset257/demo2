import request from "@/utils/request";
import { IResultType } from '../interface'

// 租户列表
export const getTenantList = (params?: any) => {
  return request<IResultType>({
    url: '/user/tenant/page',
    method: 'get',
    params
  })
}

// 租户列表无分页
export const getTenantOptions = (params?: any) => {
  return request<IResultType>({
    url: '/user/tenant/list',
    method: 'get',
    params
  })
}