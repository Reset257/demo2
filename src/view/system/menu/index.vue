<template>
  <div>
    <TableCom
      :column="column"
      :api-func="getMenu"
      :isTree="true"
      :tree-props="{ children: 'child' }"
    >
    </TableCom>
  </div>
</template>
<script lang="ts" setup>
import { column } from "./menu";
import { getMenu } from "@/api/menu/index";
</script>
<style lang="scss" scoped></style>
