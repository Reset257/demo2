<template>
  <div class="tenant">
    <div class="text-xl text-sky-500 m-20">欢迎使用 random-number-system</div>
    <Upload />
    <TableCom
      ref="tableRef"
      :column="column"
      :schemas="schemas"
      :query="query"
      hasActions
      isTree
      aside
      :props="{ children: 'child', label: 'name', value: 'id' }"
      :asideData="companyTree"
      @onHandleAdd="openDialog('add')"
      :api-func="getPostList"
      @changeAside="changeAside"
      @reset="reset"
    />
    <FormDialog
      ref="dialogRef"
      :schemas="dialogSchemas"
      @submit="handleDialog"
    />
  </div>
</template>
<script lang="ts" setup>
import { column, schemas, dialogSchemas } from "./data";
import { getCompanyList } from "@/api/company/index";
import { getPostList, addPost, editPost, deletePost } from "@/api/post/index";
import useTable from "@/hook/useTable";
import useDialog from "@/hook/useDialog";

const { dialogRef, openDialog } = useDialog();
let currentCompany = ref();
const companyTree = ref<any[]>([]);
// 处理弹窗新增编辑入参
const handleApiParams = (data: any) => {
  return {
    ...data,
    departmentId: data.department.id,
    departmentName: data.department.name,
  };
};
const { query, tableRef, getList, reset, handleDialog } = useTable({
  api: { add: addPost, edit: editPost, delete: deletePost },
  handleApiParams,
});

const changeAside = (data: any) => {
  currentCompany.value = data;
  getList({ companyId: data.id });
};

const getCompanyTree = async () => {
  await getCompanyList().then((res) => {
    if (res.code === 200) {
      companyTree.value = res.data;
    }
  });
};

onMounted(() => {
  getCompanyTree();
});
</script>
<style lang="scss" scoped>
.tenant {
  height: 100%;
}
</style>
