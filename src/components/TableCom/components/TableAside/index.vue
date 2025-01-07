<template>
  <div class="aside">
    <el-tree
      v-bind="$attrs"
      :data="data"
      @node-click="handleNodeClick"
      default-expand-all
      highlight-current
      node-key="id"
      :expand-on-click-node="false"
      :current-node-key="currentId"
    >
      <template #empty>
        <el-empty description="暂无数据" :image-size="100" />
      </template>
    </el-tree>
  </div>
</template>
<script lang="ts" setup>
interface IProps {
  data: any[];
}
const props = defineProps<IProps>();
const emit = defineEmits(["select"]);
const handleNodeClick = (node: any) => {
  emit("select", node);
};

const currentId = computed(() => {
  return props.data && props.data.length ? props.data[0]?.id : "";
});

watch(
  () => props.data,
  () => {
    if (props.data && props.data.length) emit("select", props.data[0]);
  }
);
</script>
<style lang="scss" scoped>
.aside {
  box-sizing: border-box;
  width: 250px;
  height: 100%;
  margin-right: 20px;
  padding: 20px 10px;
  overflow-y: scroll;
  background-color: #fff;

  ::v-deep {
    .el-tree-node__content {
      height: 35px;
      font-size: 15px;
    }
  }
}
</style>
