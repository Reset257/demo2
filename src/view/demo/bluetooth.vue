<template>
  <div>
    <el-button type="primary" @click="connectToDevice">测试</el-button>
    <p v-if="device">已连接设备: {{ device.name }}</p>
    <p v-if="receivedData">收到的数据: {{ receivedData }}</p>
  </div>
</template>
<script lang="ts" setup>
const device = ref<any>(null);
const receivedData = ref<any>(null);

/* 其实这里特征值和服务uuid不应该写死处理，API 获取回来之后取0位置，或者遍历，存在设备获取特征值数据失败但依然可以监听 ❗❗❗❗❗ */
const connectToDevice = async () => {
  try {
    const options = {
      filters: [
        { namePrefix: "H" }, // 按设备名称前缀过滤
      ],
      optionalServices: ["0000ffe0-0000-1000-8000-00805f9b34fb"], // 根据需要指定服务 UUID
    };
    const device = await navigator.bluetooth!.requestDevice(options);
    const server = await device.gatt.connect();
    const service = await server.getPrimaryService(
      "0000ffe0-0000-1000-8000-00805f9b34fb"
    );
    const characteristic = await service.getCharacteristic(
      "0000ffe1-0000-1000-8000-00805f9b34fb"
    );
    // 读取初始值
    // const value = await characteristic.readValue();
    // receivedData.value = value;

    // // 监听特征值变化
    characteristic.addEventListener(
      "characteristicvaluechanged",
      (event: any) => {
        const value = event.target.value;
        console.log("🚀 ~ connectToDevice ~ value:", value)
        receivedData.value = new TextDecoder().decode(value);
        console.log(
          "🚀 ~ connectToDevice ~ receivedData.value:",
          receivedData.value
        );
      }
    );

    await characteristic.startNotifications();
    device.value = device;
  } catch (error) {
    console.error("连接失败", error);
  }
};

// const dataViewToString = (dataView: any) => {
//   var string = "";
//   for (var i = 0; i < dataView.byteLength; i++) {
//     string += dataView.getUint8(i);
//   }
//   return string;
// };
</script>
<style lang="scss" scoped></style>
