import request from "@/utils/request";
import { IResultType } from '../interface'

/**
 * 文件上传
 */
export function uploadFilesApi(params: any) {
    return request<IResultType>({
        url: '/file/file/upload',
        data: params,
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}