<template>
  <div>
    <section>
      <h4 class="mb-4">签名板</h4>
      <div>
        <canvas
          ref="canvas"
          width="650"
          height="250"
          class="border-2 rounded border-gray-500"
        ></canvas>
        <el-button type="danger" class="mt-4" @click="clear"> 清空 </el-button>
        <el-button type="primary" class="mt-4" @click="save"> 保存 </el-button>
      </div>
    </section>
    <section class="mt-10" v-loading="loading">
      <h4 class="mb-4">截长图</h4>
      <el-button type="primary" class="mb-4" @click="capture"> 截图 </el-button>
      <div class="box">
        <div id="capture">
          <p v-for="i in 50" :key="i">
            {{ i }}. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Similique porro deleniti quo, provident consequatur vero cumque
            minima eaque tenetur nostrum error suscipit iste et quibusdam, at
            modi ut quis. Porro!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import SignaturePad from "signature_pad";
import html2canvas from "html2canvas";
import {
  ComponentInternalInstance,
  getCurrentInstance,
} from "@vue/runtime-core";

let instance: ComponentInternalInstance | null = getCurrentInstance();
let canvas = ref();
let signaturePad: any = null;
let loading = ref(false);
const clear = () => {
  signaturePad.clear();
};

const save = () => {
  if (signaturePad.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    const dataURL = signaturePad.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "signature.png";
    link.click();
  }
};

/* 
html2canvas 支持捕获超出视口的完整 DOM 元素。你只需要确保传递的目标 DOM 是整个内容区域，而不是只包含视口范围，检查看控制台实际长度可以判断
*/
const capture = () => {
  loading.value = true;
  html2canvas(document.getElementById("capture") as any, {
    useCORS: true, // 允许跨域资源
    scrollX: 0,
    scrollY: 0,
  })
    .then((canvas) => {
      loading.value = false;
      const imgData = canvas.toDataURL("image/png");
      const saveLink = document.createElement("a");
      saveLink.href = imgData;
      saveLink.download = "downLoad.png";
      saveLink.click();
      instance?.proxy?.$message.success("导出成功!");
    })
    .catch(() => {
      loading.value = false;
      instance?.proxy?.$message.error("导出失败");
    });
};

onMounted(() => {
  signaturePad = new SignaturePad(canvas.value);
});
</script>
<style lang="scss" scoped>
.box {
  height: 150px;
  overflow-y: scroll;
  border: 1px solid #999;
  border-radius: 5px;

  #capture {
    padding: 20px;
  }
}
</style>
