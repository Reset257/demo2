<template>
  <div class="tenant">
    <TableCom
      ref="tableRef"
      isTree
      :column="column"
      :schemas="schemas"
      :query="query"
      :api-func="getCompanyList"
      :tree-props="{ children: 'child' }"
      @onHandleAdd="emits('change', 'form')"
      @onCheck="emits('change', 'form')"
      @onEdit="emits('change', 'form')"
      @onDelete="handleDelete"
      @reset="reset"
    />
  </div>
</template>
<script lang="ts" setup>
import { column, schemas } from "./data";
import { getCompanyList, deleteCompany } from "@/api/company/index";
import useTable from "@/hook/useTable";

const emits = defineEmits(["change"]);
const { query, tableRef, handleDelete, reset } = useTable({
  api: {
    delete: deleteCompany,
  },
});
</script>
<style lang="scss" scoped>
.tenant {
  height: 100%;
}
</style>
