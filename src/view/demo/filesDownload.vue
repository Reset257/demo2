<template>
  <div>
    <section v-loading="loading">
      <h4>下载 MP4</h4>
      <p>链接：{{ mp4Url }}</p>
      <el-button type="primary" class="mt-4" @click="downloadMp4(mp4Url)">
        下载资源
      </el-button>
    </section>
  </div>
</template>
<script lang="ts" setup>
let loading = ref(false);
let mp4Url =
  "https://caps-video.runde.pro/record/36147_76644/2024/05/07/14.38.42.198.mp4";

/* 下载 MP4 */
const downloadMp4 = async (mp4Url: string, fileName = "测试") => {
  loading.value = true;
  try {
    // 使用 fetch 获取文件
    const response = await fetch(mp4Url);

    // 检查响应状态
    if (!response.ok) throw new Error("Network response was not ok");

    // 将响应转换为 blob
    const blob = await response.blob();

    // 创建一个临时的 URL 对象
    const url = window.URL.createObjectURL(blob);

    // 创建一个临时的 <a> 元素
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName; // 这里指定下载的文件名

    // 将 <a> 元素添加到文档中
    document.body.appendChild(a);

    // 程序化地触发点击事件
    a.click();

    // 触发完点击事件后移除 <a> 元素
    document.body.removeChild(a);

    // 释放 URL 对象
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  } finally {
    loading.value = false;
  }
};
</script>
<style lang="scss" scoped></style>
