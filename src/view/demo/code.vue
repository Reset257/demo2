<template>
  <div class="box">
    <el-button type="primary" @click="loadJS">动态加载 js 包</el-button>
    <el-button type="primary" @click="loadHTML">动态渲染 DOM</el-button>
    <el-button type="primary" @click="convertImageToBase64">
      url转base64
    </el-button>
    <el-button type="primary" @click="drawImg"> 绘制img </el-button>
    <div v-html="html"></div>
    <div>{{ url }}</div>

    <div style="float: left">
      <canvas
        id="canvas"
        ref="myCanvas"
        :width="311 * 0.5"
        :height="257 * 0.5"
      ></canvas>

      <img
        ref="imgRef"
        id="img"
        src="https://jysz-1316109395.cos.ap-guangzhou.myqcloud.com/safe/202407/74463069183f8ac69309722c3c653f8a.jpg"
        alt=""
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getImg } from "@/api/company/index";

let html = ref();
// let header = "data:image/jpg;base64,";
let myCanvas = ref<any>();
let imgRef = ref();
let url =
  "https://gzmcg-edu.oss-cn-guangzhou.aliyuncs.com/platform/e0ac55fa82bf44c5a128ab1122e71c1c.jpg";

/* 动态加载 jweixin-1.6.0.js，文件需要放在 public 文件夹下 ❗❗❗❗ */
const loadJS = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "./jweixin-1.4.0.js";
    script.onload = () => resolve(window.wx);
    script.onerror = () => reject(new Error("Failed to load the SDK"));
    document.head.appendChild(script);
  });
};

/* v-html 动态渲染 DOM */
const loadHTML = () => {
  html.value = `<span>测试</span>`;
};

const convertImageToBase64 = async () => {
  await getImg(url).then((res) => {
    console.log("🚀 ~ convertImageToBase64 ~ res:", res.data);
  });
};

const drawImg = () => {
  const context = myCanvas.value.getContext("2d");
  context.drawImage(imgRef.value, 0, 0, 311, 257, 0, 0, 311 * 0.5, 257 * 0.5);
};

function downloadImage(imgsrc, name) {
  //下载图片地址和图片名
  var image = new Image();
  // 解决跨域 Canvas 污染问题,
  image.setAttribute("crossorigin", "anonymous");
  image.onload = function () {
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
    var url = canvas.toDataURL("image/png"); //将图片格式转为base64
    var a = document.createElement("a"); // 生成一个a元素
    var event = new MouseEvent("click"); // 创建一个单击事件
    a.download = name || "myPhoto"; // 设置图片名称
    a.href = url; // 将生成的URL设置为a.href属性
    a.dispatchEvent(event); // 触发a的单击事件
  };
  image.src = imgsrc + "?time=" + Date.now(); //注意，这里是灵魂，否则依旧会产生跨域问题
}

const base64 = () => {
  fetch(url);
  console.log("🚀 ~ base64 ~ window.btoa(url):", window.btoa(url));

  // return new Promise((resolve) => {

  //   const image = new Image();
  //   // 先设置图片跨域属性
  //   image.crossOrigin = "Anonymous";
  //   // 再给image赋值src属性，先后顺序不能颠倒
  //   image.src = url;
  //   image.onload = function () {
  //     const canvas = document.createElement("CANVAS");
  //     // 设置canvas宽高等于图片实际宽高
  //     canvas.width = image.width;
  //     canvas.height = image.height;
  //     canvas.getContext("2d").drawImage(image, 0, 0);
  //     // toDataUrl可以接收2个参数，参数一：图片类型，参数二： 图片质量0-1（不传默认为0.92）
  //     const dataURL = canvas.toDataURL("image/jpeg");
  //     resolve(dataURL);
  //   };
  //   image.onerror = () => {
  //     resolve({ message: "相片处理失败" });
  //   };
  // });
};
</script>
<style lang="scss" scoped></style>
