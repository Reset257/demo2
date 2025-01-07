<template>
  <div class="box">
    <div class="cicle" @click="test">
      <div class="center"></div>
      <div class="line" :style="transform">
        <div class="point" :style="[transform, top]"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
let n = ref(0);
let m = ref(0);

const transform = computed(() => `transform: rotate(${n.value}deg)`);
const top = computed(() => `top: ${m.value}px`);

const test = () => {
  n.value += 10;
  m.value += 20;
};
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .cicle {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #333;
    border-radius: 50%;

    .center {
      position: absolute;
      top: calc(200px - 5px);
      left: calc(200px - 5px);
      width: 10px;
      height: 10px;
      background-color: #000;
      border-radius: 50%;
    }

    .line {
      position: absolute;
      top: 17px;
      left: calc(200px - 2px);
      width: 4px;
      height: 180px;
      background-color: red;
      border-radius: 20px;
      transform: rotate(0deg);
      transform-origin: bottom left;
      transition: all 0.5s;
    }

    .point {
      position: absolute;
      top: 10px;
      left: calc(0px - 8px);
      width: 20px;
      height: 20px;
      background-color: green;
      border-radius: 50%;
      transform: rotate(0deg);
      transition: all 0.5s;
    }
  }
}
</style>
