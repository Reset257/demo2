<template>
  <div>
    <!-- 表格拓展搜索区域（一般是请求）使用 -->
    <TableCom :column="column" :query="query" :has-actions="true">
      <template #SearchForm>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="名称">
              <el-input v-model="query.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别">
              <el-select v-model="query.devSn">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </template>
    </TableCom>
  </div>
</template>
<script lang="ts" setup>
import { column } from "./auth";
import useTable from "@/hook/useTable";

const { query } = useTable();

const options = [
  {
    value: "1",
    label: "33",
  },
];
</script>
<style lang="scss" scoped></style>
