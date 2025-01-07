import Layout from '@/components/Layout/index.vue'

const demo = {
  path: '/demo',
  name: 'demo',
  redirect: '/demo/tower',
  meta: {
    icon: "icon-setup",
    index: "9",
    showChildren: true,
    title: "demo",
  },
  component: Layout,
  children: [
    {
      path: 'cssDemo',
      component: () => import('@/view/demo/cssDemo.vue'),
      meta: {
        index: "1",
        title: "css样式",
      },
    },
    {
      path: 'tower',
      component: () => import('@/view/demo/tower.vue'),
      meta: {
        index: "1",
        title: "动画",
      },
    },
    {
      path: 'treeMove',
      component: () => import('@/view/demo/treeMove.vue'),
      meta: {
        index: "2",
        title: "树移动",
      },
    },
    {
      path: 'filesDownload',
      component: () => import('@/view/demo/filesDownload.vue'),
      meta: {
        index: "3",
        title: "文件下载",
      },
    },
    {
      path: 'canvas',
      component: () => import('@/view/demo/canvas.vue'),
      meta: {
        index: "3",
        title: "canvas",
      },
    },
    {
      path: 'bluetooth',
      component: () => import('@/view/demo/bluetooth.vue'),
      meta: {
        index: "4",
        title: "蓝牙数据获取",
      },
    },
    {
      path: 'code',
      component: () => import('@/view/demo/code.vue'),
      meta: {
        index: "5",
        title: "code",
      },
    },
    {
      path: 'webgl',
      component: () => import('@/view/demo/webgl.vue'),
      meta: {
        index: "6",
        title: "webgl",
      },
    },
    {
      path: 'tiptap',
      component: () => import('@/view/demo/tiptap.vue'),
      meta: {
        index: "7",
        title: "富文本",
      },
    },
    {
      path: 'drag',
      component: () => import('@/view/demo/drag.vue'),
      meta: {
        index: "8",
        title: "拖拽示例",
      },
    },
  ]
};

export default demo;
