import Layout from '@/components/Layout/index.vue'

const enterprise = {
  path: '/enterprise',
  name: 'enterprise',
  redirect: '/enterprise/company',
  meta: {
    icon: "icon-setup",
    index: "2",
    showChildren: true,
    title: "企业管理",
  },
  component: Layout,
  children: [
    {
      path: 'table',
      component: () => import('@/view/enterprise/TableDemo/index.vue'),
      meta: {
        index: "1",
        title: "Table 组件",
      },
    },
    {
      path: 'echarts',
      component: () => import('@/view/enterprise/EchartsDemo/index.vue'),
      meta: {
        index: "1",
        title: "Echarts组件",
      },
    },
    {
      path: 'company',
      component: () => import('@/view/enterprise/company/index.vue'),
      meta: {
        index: "11",
        title: "公司管理",
      },
    },
    {
      path: 'post',
      component: () => import('@/view/enterprise/post/index.vue'),
      meta: {
        index: "12",
        title: "岗位管理",
      },
    },
    {
      path: 'user',
      component: () => import('@/view/enterprise/user/index.vue'),
      meta: {
        index: "13",
        title: "用户管理",
      },
    },
  ]
};

export default enterprise;
