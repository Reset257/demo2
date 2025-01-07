<template>
  <template v-for="item in routerData" :key="item.path">
    <!-- children 有长度，递归， hideMenu 的隐藏子节点的，eg: 首页，工作台 -->
    <template v-if="item.children?.length && !item.meta?.hideMenu">
      <el-sub-menu :index="getIndex(item)">
        <template #title>
          <div><svg-icon :iconName="item.meta?.icon"></svg-icon></div>
          <span class="menuItem">{{ item.meta?.title }}</span>
        </template>
        <SubMenu :router-data="item.children" :basepath="item.path" />
      </el-sub-menu>
    </template>
    <!-- 递归出口，children 没有或长度为 0 -->
    <template v-else>
      <el-menu-item :index="getIndex(item)">
        <svg-icon :iconName="item.meta?.icon" />
        <template #title>
          <span class="menuItem">{{ item.meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>
<script lang="ts">
export default {
  name: "SubMenu",
};
</script>
<script lang="ts" setup>
interface IMeta {
  index: string;
  icon?: string;
  title?: string;
  // 隐藏菜单
  hideMenu?: boolean;
}

interface IRouterData {
  path: string;
  children?: IRouterData[];
  meta?: IMeta;
  index: string;
  redirect?: string;
}

interface ISubMenuProps {
  routerData: IRouterData[];
  basepath?: string;
}

const props = withDefaults(defineProps<ISubMenuProps>(), {
  basepath: "",
  hideMenu: false,
});

// 计算 menu Router 跳转的 index 属性
const getIndex = (item: IRouterData) => {
  const res = item.redirect || `${props.basepath}/${item.path}`;
  return res.replace("//", "/");
};
</script>
<style lang="scss" scoped>
.menuItem {
  margin-left: 10px;
}

.el-sub-menu,
.el-menu-item {
  min-width: 200px;
}

svg {
  font-size: 15px;
}
</style>
