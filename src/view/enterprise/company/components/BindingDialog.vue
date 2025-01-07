<template>
  <Dialog
    ref="bindingDialogRef"
    title="添加管理员"
    width="40%"
    @submit="onSubmit"
  >
    <template #content>
      <el-transfer
        v-model="selectValue"
        filterable
        :filter-method="filterMethod"
        filter-placeholder="输入搜索内容"
        :titles="['源列表', '目的列表']"
        :data="data"
      />
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import useDialog from "@/hook/useDialog";

const { dialogRef: bindingDialogRef, openDialog } = useDialog();
const emit = defineEmits(["submit"]);
const data = ref<any[]>([
  {
    label: "张三",
    key: "6724675629",
    initial: "张三",
  },
]);
const selectValue = ref([]);

const filterMethod = (query: any, item: any) => {
  return item.initial.toLowerCase().includes(query.toLowerCase());
};

const onSubmit = () => {
  console.log("iii");
  emit("submit");
};

defineExpose({
  openDialog,
});
</script>
<style lang="scss" scoped></style>
