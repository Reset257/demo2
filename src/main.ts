import './index.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from './store'
import ElementPlus from 'element-plus'
import SvgIcon from '@/components/SvgIcon/index.vue'
import 'element-plus/dist/index.css'
import '@/assets/iconfont/iconfont.js'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { ElMessage } from "element-plus";

// 路由导航守卫
import './permission'
// 全局自定义指令
import Directive from "@/directive"

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
Directive(app)
//在app上使用message组件
app.use(ElMessage);
// 全局挂载 ElMessage
app.config.globalProperties.$message = ElMessage;
app.use(router);
app.use(store)
// 全局注册 SvgIcon 组件
app.component('SvgIcon', SvgIcon);
app.mount("#app");