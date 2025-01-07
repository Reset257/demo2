<template>
  <el-table :border="true" :data="dataSource" stripe row-key="id">
    <el-table-column
      v-for="item in column"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
    >
      <template v-slot="{ row, column, $index }" v-if="item.slot">
        <slot :name="item.prop" v-bind="{ row, column, $index }"></slot>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      fixed="right"
      v-if="hasActions"
      :align="'center'"
    >
      <template v-slot="{ row, column, $index }">
        <slot name="action" v-bind="{ row, column, $index }"></slot>
      </template>
    </el-table-column>
    <template #empty>
      <el-empty description="暂无数据" />
    </template>
  </el-table>
</template>
<script lang="ts" setup>
import { IColumn } from "../../interface";

interface IProps {
  dataSource: any[];
  column: IColumn[];
  hasActions: boolean;
}

defineProps<IProps>();
</script>
<style lang="scss" scoped></style>
