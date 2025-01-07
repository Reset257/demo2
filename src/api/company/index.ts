import request from "@/utils/request";
import { IResultType } from '../interface'
import qs from 'qs'

// 公司/组织列表
export const getCompanyList = (params?: any) => {
  return request<IResultType>({
    url: '/mockApi/m1/2414443-0-default/getPageList',
    method: 'get',
    params
  })
}

// 获取组织树
export const getCompanyTree = () => {
  return request<IResultType>({
    url: '/mockApi/m1/2414443-0-default/getTree',
    method: 'get'
  })
}

// 公司/组织下拉
export const getCompanyOptions = (params?: any) => {
  return request<IResultType>({
    url: '/user/unitManager/company/option',
    method: 'get',
    params
  })
}

export const getImg = (url?: any) => {
  return request<IResultType>({
    url: `http://192.168.240.100:11001/dataCenter/api/v2/toolkits/getUserImageByUrl?imageUrl=${url}`,
    method: 'get',
  })
}

// 新增公司
export const addCompany = (params?: any) => {
  return request<IResultType>({
    url: '/user/unitManager/companyUnit/add',
    method: 'post',
    data: params,
    autoMessage: true
  })
}

// 编辑公司
export const editCompany = (params?: any) => {
  return request<IResultType>({
    url: '/user/unitManager/defaultDepartment/save',
    method: 'post',
    data: qs.stringify(params),
    autoMessage: true
  })
}

// 删除公司
export const deleteCompany = (params?: any) => {
  return request<IResultType>({
    url: '/user/unitManager/defaultDepartment/delete',
    method: 'post',
    data: qs.stringify(params),
    autoMessage: true
  })
}