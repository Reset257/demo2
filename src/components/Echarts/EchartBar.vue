<template>
  <div class="box">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { merge } from "lodash";

interface IProps {
  /* 拓展覆盖属性 */
  expandOption?: any;
}
const props = defineProps<IProps>();

// 注册必须的组件
echarts.use([GridComponent, BarChart, CanvasRenderer]);

let echartRef = ref();
const myChart = shallowRef();

const defaultOption = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

const initChart = () => {
  const option = merge({}, defaultOption, props.expandOption);
  myChart.value = echarts.init(echartRef.value);
  myChart.value.setOption(option);
};

onMounted(() => {
  initChart();
});
</script>
<style lang="scss" scoped>
/* 加一个 box 才能让图表自适应容器 */
.box,
.echart {
  width: 100%;
  height: 100%;
}
</style>
