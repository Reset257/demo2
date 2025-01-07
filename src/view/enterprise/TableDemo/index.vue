<template>
  <div class="tenant">
    <Table
      ref="tableRef"
      v-bind="getProps"
      @onHandleAdd="openDialog('add')"
      @onEdit="openDialog('edit')"
      @onDelete="handleDelete"
    ></Table>
    <FormDialog
      ref="dialogRef"
      :schemas="dialogSchemas"
      @submit="handleDialog"
    />
  </div>
</template>
<script lang="ts" setup>
import useTable from "@/components/Table/hook/useTable";
import useDialog from "@/hook/useDialog";
import { column, schemas, dialogSchemas } from "./data";
import { getCompanyList, getCompanyTree } from "@/api/company/index";
import { addPost, editPost, deletePost } from "@/api/post/index";

const { dialogRef, openDialog } = useDialog();

const { tableRef, handleDialog, getProps, handleDelete } = useTable({
  apiFunc: getCompanyList,
  // apiFunc: getCompanyTree,
  treeApiFunc: getCompanyTree,
  // treeData,
  column,
  schemas,
  treeAside: true,
  treeProps: { key: "deptId" },
  handleQuery: (query) => {
    return { ...query, key: "自定义参数" };
  },
  editApi: editPost,
  addApi: addPost,
  deleteApi: deletePost,
  handleApiParams: (data: any) => {
    return {
      ...data,
      departmentId: "data.department.id",
      departmentName: "data.department.name",
    };
  },
});
</script>
<style lang="scss" scoped>
.tenant {
  height: 100%;
}
</style>
