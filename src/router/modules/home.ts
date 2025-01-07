import Layout from '@/components/Layout/index.vue'

const home = {
  path: '/home',
  name: 'home',
  redirect: '/home/index',
  meta: {
    icon: "icon-setup",
    index: "1",
    title: "首页",
    hideMenu: true
  },
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/view/home/index.vue'),
      meta: {
        index: "11",
        title: "首页",
      },
    }
  ]
};

export default home;
