<template>
  <div id="container"></div>
</template>
<script lang="ts" setup>
import * as AMapLoader from "@amap/amap-jsapi-loader";

const map = shallowRef(null);

const initMap = () => {
  AMapLoader.load({
    key: "e3cac9f858457a9ba9d599e3196c4728",
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.ToolBar", "AMap.ControlBar", 'AMap.AutoComplete', 'AMap.PlaceSearch', 'AMap.Geocoder', 'AMap.Marker'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap: any) => {
      map.value = new AMap.Map("container", {
        //设置地图容器id
        viewMode: "3D", //是否为3D地图模式
        zoom: 10, //初始化地图级别, 缩放会影响地图样式
        mapStyle: 'amap://styles/dark', // 设置自定义地图样式
        center: [105.602725, 37.076636], //初始化地图中心点位置
      });
    })
    .catch((e: any) => {
      console.log(e);
    });
};

onMounted(() => {
  initMap();
});
</script>
<style lang="scss" scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
}
</style>
