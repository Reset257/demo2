<template>
  <div class="sideBox">
    <div class="title">
      <template v-if="!isCollapse">
        <span>租户平台</span>
        <svg-icon
          iconName="icon-shouqicaidan"
          @click="isCollapse = true"
        ></svg-icon>
      </template>
      <svg-icon
        v-else
        iconName="icon-zhankaicaidan"
        @click="isCollapse = false"
      ></svg-icon>
    </div>
    <el-menu
      router
      :default-active="currentRoute.path + ''"
      :collapse="isCollapse"
    >
      <SubMenu :routerData="allRoute" />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const { currentRoute } = router;
const isCollapse = ref(false);

// 默认等于静态路由
const allRoute = ref(
  router
    .getRoutes()
    .filter((item) => item.children && item.children.length)
    .sort((a, b) => Number(a?.meta?.index) - Number(b?.meta?.index))
);
</script>

<style lang="scss" scoped>
.sideBox {
  display: flex;
  flex-direction: column;
  height: 100%;

  .title {
    position: relative;
    padding: 15px 0;
    text-align: center;
    background-color: #fff;

    span {
      margin-right: 10px;
      color: #333;
      font-weight: 600;
      font-size: 17px;
    }
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu {
    flex: 1;
    overflow-y: scroll;
    border: unset;
  }
}
</style>
