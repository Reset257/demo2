<template>
  <div class="tableCom">
    <TreeAside
      v-if="treeAside"
      v-model="queryTree"
      :data="treeData"
      :api-func="treeApiFunc"
      :treeProps="treeProps"
    />
    <div class="table" v-loading="!(queryTree || !treeAside)">
      <Search v-model="querySearch" :schemas="schemas">
        <template #SearchForm>
          <slot name="SearchForm"></slot>
        </template>
      </Search>
      <main>
        <div class="options">
          <el-button :icon="Upload">导出</el-button>
          <el-button type="primary" :icon="Plus" @click="emits('onHandleAdd')"
            >新增</el-button
          >
          <slot name="options"></slot>
        </div>
        <ETable
          v-loading="loading"
          :has-actions="!hideActions"
          :column="column"
          :data-source="dataSource"
        >
          <template #[item.prop]="data" v-for="item in column" :key="item.prop">
            <slot :name="[item.prop]" v-bind="data || {}"></slot>
          </template>
          <template #action="{ row }">
            <el-button
              v-if="!hideCheck"
              link
              type="primary"
              @click="emits('onCheck', row)"
            >
              查看
            </el-button>
            <el-button
              v-if="!hideEdit"
              link
              type="warning"
              @click="emits('onEdit', row)"
            >
              编辑
            </el-button>
            <el-button
              v-if="!hideDelete"
              link
              type="danger"
              @click="emits('onDelete', row)"
            >
              删除
            </el-button>
            <slot name="action"></slot>
          </template>
        </ETable>
      </main>
      <footer>
        <el-pagination
          background
          :pager-count="3"
          v-model:page-size="pageSize"
          v-model:current-page="page"
          layout="total, prev, pager, next, sizes"
          :total="total"
        />
      </footer>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ETable from "./components/ETable/index.vue";
import TreeAside from "./components/TreeAside/index.vue";
import Search from "./components/Search/index.vue";
import { ElMessage } from "element-plus";
import { ISchemas, IColumn } from "./interface";
import { Plus, Upload } from "@element-plus/icons-vue";
import { ITreeOptionProps } from "./interface";

export interface IProps {
  /* Table 请求接口 */
  apiFunc: (param?: any) => any;
  /* Table 列数据 */
  column: IColumn[];
  /* Table 搜索区域数据 */
  schemas?: ISchemas[];
  /* 是否显示 Table 侧边树选择 */
  treeAside?: boolean;
  /* 侧边树请求接口 */
  treeApiFunc?: (param?: any) => any;
  /* 侧边树配置选项 */
  treeProps?: ITreeOptionProps;
  /* 侧边树数据 */
  treeData?: any;
  /* 隐藏表格操作栏 */
  hideActions?: boolean;
  /* 隐藏表格操作栏查看按钮 */
  hideCheck?: boolean;
  /* 隐藏表格操作栏编辑按钮 */
  hideEdit?: boolean;
  /* 隐藏表格操作栏删除按钮 */
  hideDelete?: boolean;
  /* 处理查询字符串 */
  handleQuery?: (query: any) => {};
}

const props = withDefaults(defineProps<IProps>(), {
  handleQuery: (query: any) => {
    return query;
  },
  treeProps: () => ({ key: "treeId" }),
});
const emits = defineEmits(["onHandleAdd", "onCheck", "onEdit", "onDelete"]);

/* 侧边树筛选数据 */
let queryTree = ref<any>({});

/* Search 组件搜索条件数据 */
let querySearch = ref<any>({});

/* Table 数据 */
let loading = ref(false);
let dataSource = ref([]);
let page = ref(1);
let pageSize = ref(10);
let total = ref(0);

// 列表请求
const getList = async () => {
  const { isReset, ...query } = unref(querySearch);
  loading.value = true;
  if (isReset) {
    page.value = 1;
    pageSize.value = 10;
  }
  try {
    const res = await props.apiFunc({
      page: unref(page),
      limit: unref(pageSize),
      ...props.handleQuery({
        ...query,
        [`${props.treeProps.key}`]: unref(queryTree),
      }),
    });
    dataSource.value = res.data?.list || res.data;
    total.value = res.data.total;
  } catch (error: any) {
    ElMessage(error.ElMessage);
  } finally {
    loading.value = false;
  }
};

/* 分页器发生变化时重新请求列表 */
watch(
  () => [unref(page), unref(pageSize)],
  () => {
    getList();
  }
);

/* Search 组件搜索条件数据触发查询 */
watch(
  () => unref(querySearch),
  () => {
    getList();
  }
);

/* 侧边树筛选数据触发查询 */
watch(
  () => unref(queryTree),
  () => {
    unref(queryTree) && getList();
  }
);

defineExpose({
  getList,
});
</script>
<style lang="scss" scoped>
.tableCom {
  display: flex;
  height: 100%;

  .table {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    box-sizing: border-box;
    width: 0;
    padding: 25px;
    background-color: #fff;

    main {
      display: flex;
      flex: 1;
      flex-direction: column;
      height: 0;

      .options {
        display: flex;
        justify-content: flex-end;
        padding: 0 0 20px 0;
      }
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100px;
      padding-top: 20px;
    }
  }
}
</style>
