<template>
  <div class="content">
    <div class="line line1"></div>
    <div class="line line2"></div>
    <img :src="wheel" class="wheel" />
    <img :src="object" class="object" />
    <img :src="tower" class="tower" :style="towerStyle" />
  </div>
</template>
<script lang="ts" setup>
import wheel from "@/assets/image/wheel.png";
import object from "@/assets/image/object.png";
import tower from "@/assets/image/tower.png";

/* 塔吊实时数据 */
const armHeight = 80; // 臂高
const frontArm = 37; // 长臂长
const backArm = 37; // 短臂长
const range = 37; // 摆动幅度
const angle = 37; // 角度
const weight = 37; // 载重
const height = 37; // 吊钩高度

/* css 数据 */
const towerStyle = () => {
  return ``;
};
</script>
<style lang="scss" scoped>
.content {
  position: relative;
  height: 100%;

  .object,
  .wheel,
  .tower,
  .line {
    position: absolute;
  }

  .tower {
    bottom: 0;
    left: 0;
    height: 95%;
  }

  .wheel {
    top: 19.5%;
    left: 17%;
    width: 2.5%;
  }

  .object {
    top: 22%;
    left: 15.8%;
    z-index: 0;
    width: 5%;
  }

  .line {
    top: 20%;
    z-index: 1;
    width: 2px;
    height: 20px;
    background-color: #666;
  }

  .line1 {
    left: 17.5%;
  }
  .line2 {
  }
}
</style>
