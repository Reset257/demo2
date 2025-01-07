<template>
  <!-- 表格结合 hook 的基本使用 -->
  <TableCom
    :column="column"
    :api-func="getList"
    :query="query"
    :schemas="schemas"
    :has-actions="true"
  >
    <template #action>
      <el-button link type="primary" size="small">其他</el-button>
    </template>
    <template #status="{ row }">
      {{ row.status === 1 ? "启用" : "关闭" }}
    </template>
  </TableCom>
</template>
<script lang="ts" setup>
import { column, schemas } from "./data";
import { getList } from "@/api/table/index";
import useTable from "@/hook/useTable";

const { query } = useTable();
</script>
