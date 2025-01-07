import request from "@/utils/request";
import { IResultType } from '../interface'
import qs from 'qs'

// 获取验证码图片
export const getCaptchaImageApi = (params?: any) => {
    return request<IResultType>({
        url: '/auth/captchaImage',
        method: 'get',
        params,
    })
}

// 普通用户登录
export const loginByUser = (params?: any) => {
    return request<IResultType>({
        url: '/auth/login',
        method: 'post',
        data: qs.stringify(params),
        autoMessage: true
    })
}

