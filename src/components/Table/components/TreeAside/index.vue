<template>
  <div class="aside">
    <el-tree
      v-loading="loading"
      :data="treeData"
      :props="treeProps"
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
  apiFunc?: (param?: any) => any;
  data?: any[];
  treeProps?: any;
}
const props = withDefaults(defineProps<IProps>(), {
  treeProps: {
    children: "children",
    label: "label",
  },
});
const emit = defineEmits(["update:modelValue"]);
let loading = ref(false);
const treeData = ref<any>([]);

/* 设置默认选择第一个 */
const currentId = computed(() => {
  const id = treeData.value?.length ? treeData.value[0]?.id : "";
  emit("update:modelValue", id);
  return id;
});

const handleNodeClick = (node: any) => {
  emit("update:modelValue", node.id);
};

/* 请求接口 */
const getTree = async () => {
  loading.value = true;
  await props.apiFunc!().then((res: any) => {
    loading.value = false;
    if (res.code === 200) {
      treeData.value = res.data;
    }
  });
};

onMounted(() => {
  if (props.apiFunc) {
    getTree();
  } else if (props.data?.length) {
    treeData.value = props.data;
  }
});
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
