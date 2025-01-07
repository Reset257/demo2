<template>
  <div class="login">
    <main>
      <div class="tip">
        <el-radio-group v-model="loginRole" style="margin-bottom: 30px">
          <el-radio-button label="auth">用户</el-radio-button>
          <el-radio-button label="admin">管理员</el-radio-button>
          <el-radio-button label="tenant">租户</el-radio-button>
        </el-radio-group>
      </div>
      <h3>欢迎登录 {{ loginRole }}</h3>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="账号密码登录" name="1">
          <AccountLogin :loginRole="loginRole" />
        </el-tab-pane>
        <el-tab-pane label="手机号登录" name="2">
          <AccountLogin :loginRole="loginRole" />
        </el-tab-pane>
      </el-tabs>
    </main>
  </div>
</template>
<script lang="ts" setup>
import AccountLogin from "./components/AccountLogin.vue";
import type { TabsPaneContext } from "element-plus";
import { ILoginRole } from "./interface";

const loginRole = ref<ILoginRole>("auth");
const activeName = ref("1");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: 20px;
    background-color: #fff;

    .tip {
      position: absolute;
      top: 0px;
      right: 0px;
    }

    ::v-deep(.el-tabs__header) {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
