<template>
  <div class="demo">
    <el-row :gutter="20">
      <el-col :span="8">
        <EchartBar :expandOption="expandOption"></EchartBar>
      </el-col>
    </el-row>
    <div class="vwTest">
      <h4>测试自适应</h4>
      <EchartBar :expandOption="expandOption"></EchartBar>
    </div>
  </div>
</template>
<script lang="ts" setup>
const expandOption = {
  xAxis: {
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  },
  yAxis: {
    axisTick: {
      show: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.demo {
  width: 100%;
  height: 100%;

  .el-row {
    height: 50%;
  }

  .vwTest {
    width: vw(300);
    height: vh(400);
  }
}
</style>
