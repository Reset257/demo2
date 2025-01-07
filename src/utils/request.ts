// 二次封装axios
import axios, { Canceler } from "axios";
import { ElMessage } from 'element-plus'
import { getToken } from "@/utils/cookies";
import { logOut } from "@/utils/common";
import { useAxiosStore } from '@/store/axios'
import { useUserStore } from "@/store/user";

let autoMessage: any = false

// 创建一个实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_NODE_ENV === "production" ? "" : "api",
  timeout: 30 * 1000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    autoMessage = config.autoMessage
    const token = getToken()
    // 请求携带 token 
    token && (config.headers['authorization'] = token)
    // 代理 mock 数据
    if (config.url && config.url.match(/^\/mockApi\//)) {
      config.baseURL = '';
    }
    //页面跳转取消上一个页面请求
    const axiosStore = useAxiosStore()
    config.cancelToken = new axios.CancelToken((cancel: Canceler) => {
      axiosStore.setCancelToken(cancel)
    })

    // 全局 get 请求携带必要入参
    const userStore = useUserStore();
    const { tenantId } = userStore.getUserInfo;
    if (config.method === 'get') {
      config.params = { ...config.params, tenantId }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (result) => {
    // 处理全局请求消息提示
    if (autoMessage) {
      const { code, message } = result.data
      if (code === 200) {
        ElMessage.success(message)
      } else {
        ElMessage.error(message)
      }
    }

    // 登录过期退出登录
    if (result.data.message === "登录凭证已过期,请重新登录") {
      logOut()
    }

    return result.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;