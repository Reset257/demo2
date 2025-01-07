import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
// 引入自动引入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
// 本地调试配置 https
import VitePluginCertificate from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // 开发或生产环境服务的公共基础路径
    base: "equipment_v1",

    // 插件配置
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue'], dts: 'src/auto-import.d.ts'
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      VitePluginCertificate({
        source: 'coding'
      })
    ],

    resolve: {
      // 配置别名
      alias: {
        '@': resolve(__dirname, 'src')
      },

      // 导入时想要省略的扩展名列表
      extensions: ['.js', '.ts', '.json']
    },

    // 配置 scss 预处理器
    css: {
      postcss: {
        plugins: [
          autoprefixer,
          tailwindcss
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/assets/styles/mixin.scss"; @import "src/assets/styles/index.scss"; @import "src/assets/styles/util.scss";'
        },
      },
    },

    // 配置运行环境
    define: {
      __APP_ENV__: env.APP_ENV
    },

    // 服务
    server: {
      port: 8887,
      host: true,
      open: true,
      https: true,
      // 代理
      proxy: {
        '/mockApi': {
          target: "https://apifoxmock.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/mockApi/, '')
        },
        '/api': {
          target: "https://apifoxmock.com/m1/2414443-0-default",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      }
    }
  }
})
