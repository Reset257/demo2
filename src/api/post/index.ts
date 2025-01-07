import request from "@/utils/request";
import { IResultType } from '../interface'
import qs from 'qs'

// 列表
export const getPostList = (params?: any) => {
  return request<IResultType>({
    url: '/user/postManager/getByCompanyNTenant',
    method: 'get',
    params
  })
}


// 新增
export const addPost = (params?: any) => {
  return request<IResultType>({
    url: '/user/postManager/batchCreate',
    method: 'post',
    data: params,
    autoMessage: true
  })
}

// 编辑
export const editPost = (params?: any) => {
  return request<IResultType>({
    url: '/user/postManager/save',
    method: 'post',
    data: qs.stringify(params),
    autoMessage: true
  })
}

// 删除
export const deletePost = (params?: any) => {
  return request<IResultType>({
    url: '/user/postManager/delete',
    method: 'post',
    data: qs.stringify(params),
    autoMessage: true
  })
}