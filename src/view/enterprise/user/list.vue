<template>
  <div class="tenant">
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
      @onHandleAdd="emits('change', 'form')"
      @onCheck="emits('change', 'form')"
      @onEdit="emits('change', 'form')"
      :api-func="getCompanyList"
      @changeAside="changeAside"
      @reset="reset"
    />
  </div>
</template>
<script lang="ts" setup>
import { column, schemas } from "./data";
import { getCompanyList } from "@/api/company/index";
import useTable from "@/hook/useTable";

const emits = defineEmits(["change"]);
const { query, tableRef, getList, reset } = useTable();

const companyTree = ref<any[]>([]);
const changeAside = (data: any) => {
  getList({
    id: data.id,
  });
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
