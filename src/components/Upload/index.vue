<template>
  <el-upload
    v-model:file-list="fileList"
    :multiple="multiple"
    :limit="limit"
    :http-request="uploadFile"
  >
    <el-button type="primary">上传</el-button>
  </el-upload>
</template>
<script lang="ts" setup>
import { uploadFilesApi } from "@/api/system/index";
import type { UploadUserFile } from "element-plus";

interface IProps {
  limit: number;
  multiple: boolean;
}

withDefaults(defineProps<IProps>(), {
  limit: 1,
  multiple: false,
});

const fileList = ref<UploadUserFile[]>([]);

// 重写上传程序
async function uploadFile(params: any) {
  var { file } = params;
  var formData = new FormData();
  formData.append("file", file);
  let res = await uploadFilesApi(formData);
  if (res) {
    console.log("🚀 ~ uploadFile ~ res:", res);
  }
}
</script>
<style lang="scss" scoped></style>
