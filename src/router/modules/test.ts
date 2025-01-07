import Layout from '@/components/Layout/index.vue'

const test = {
  path: '/test',
  name: 'test',
  redirect: '/test/test2',
  meta: {
    icon: "icon-setup",
    index: "3",
    title: "測試1",
  },
  component: Layout,
  children: [
    {
      path: '/test1',
      meta: {
        index: "45",
        title: "测试2",
      },
      children: [
        {
          path: 'company1',
          component: () => import('@/view/testRouter/company/company1/index.vue'),
          meta: {
            index: "2311",
            title: "测试21",
          },
        },
        {
          path: 'company2',
          component: () => import('@/view/testRouter/company/company2/index.vue'),
          meta: {
            index: "2312",
            title: "测试22",
          },
        },
        {
          path: 'company3',
          component: () => import('@/view/testRouter/company/company3/index.vue'),
          meta: {
            index: "2313",
            title: "测试23",
          },
        },
      ]
    },
    {
      path: 'test2',
      component: () => import('@/view/testRouter/post/index.vue'),
      meta: {
        index: "232",
        title: "岗位管理",
      },
    },
    {
      path: 'test3',
      component: () => import('@/view/testRouter/user/index.vue'),
      meta: {
        index: "233",
        title: "用户管理",
      },
    },
  ]
};

export default test;
