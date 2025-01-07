<template>
  <div>
    <el-dialog v-model="dialogVisible" :title="title" :width="width">
      <div class="content">
        <slot name="content"></slot>
      </div>
      <template #footer>
        <div class="dialog-footer" v-if="!hideFooter">
          <el-button @click="dialogVisible = false"> 取消 </el-button>
          <el-button type="primary" @click="onSubmit" v-throttle> 提交 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
interface IProps {
  title: string;
  width?: string;
  hideFooter?: boolean;
}

withDefaults(defineProps<IProps>(), {
  width: "30%",
  hideFooter: false,
});
const emit = defineEmits(["submit"]);
const dialogVisible = ref(false);

const openDialog = () => {
  dialogVisible.value = true;
};

const closeDialog = () => {
  dialogVisible.value = false;
};

const onSubmit = () => {
  console.log("防抖测试");

  emit("submit");
};

defineExpose({
  openDialog,
  closeDialog,
});
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
}
.dialog-footer {
  display: flex;
  justify-content: center;

  .el-button {
    margin: 0 20px;
  }
}
</style>
