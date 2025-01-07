<template>
  <div class="header">
    <section class="left">{{ time }}</section>
    <section class="right">
      <span> {{ username }}</span>
      <span @click="onLogOut">退出登录</span>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { getToday } from "@/utils/time";
import { logOut } from "@/utils/common";
import { ElMessageBox } from "element-plus";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();
const { username } = userStore.getUserInfo;
let time = ref(getToday("YYYY-MM-DD hh:mm:ss"));
let timer = setInterval(() => {
  time.value = getToday("YYYY-MM-DD hh:mm:ss");
}, 1000 / 60);

// 优化计时器
requestAnimationFrame(() => timer);

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer);
  }
});

const onLogOut = () => {
  ElMessageBox.confirm("确定退出登录?", "Warning", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => logOut());
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: #fff;
  background-color: #333;

  .right {
    span {
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>
