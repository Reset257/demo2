<template>
  <div class="tableCom">
    <TableAside
      v-if="aside"
      v-bind="$attrs"
      :data="asideData"
      @select="selectAside"
    />
    <div class="table">
      <TableSearch
        @on-reset="onReset"
        @on-search="onSearch"
        :schemas="schemas"
        :search-field="searchField"
      >
        <template #SearchForm>
          <slot name="SearchForm"></slot>
        </template>
      </TableSearch>
      <main>
        <div class="options">
          <el-button :icon="Upload">导出</el-button>
          <el-button type="primary" :icon="Plus" @click="emits('onHandleAdd')"
            >新增</el-button
          >
          <slot name="options"></slot>
        </div>
        <Table
          :has-actions="!hideActions"
          v-bind="$attrs"
          v-loading="loading"
          element-loading-text="列表加载中..."
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
        </Table>
      </main>
      <footer v-if="!isTree">
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
import Table from "./components/Table/index.vue";
import TableAside from "./components/TableAside/index.vue";
import TableSearch from "./components/TableSearch/index.vue";
import { ElMessage } from "element-plus";
import { ISchemas, IColumn } from "./interface";
import { Plus, Upload } from "@element-plus/icons-vue";

interface IProps {
  column: IColumn[];
  schemas?: ISchemas[];
  query?: Record<string, string>;
  apiFunc: (param?: any) => any;
  isTree: boolean;
  aside?: boolean;
  // 侧边数据
  asideData?: any;
  // 配置按钮自定义隐藏
  hideActions?: boolean;
  hideCheck?: boolean;
  hideEdit?: boolean;
  hideDelete?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  isTree: false,
  aside: false,
  hideActions: false,
  hideCheck: false,
  hideEdit: false,
  hideDelete: false,
});
const emits = defineEmits([
  "onSearch",
  "reset",
  "onHandleAdd",
  "changeAside",
  "onCheck",
  "onEdit",
  "onDelete",
]);

// Table 数据
let loading = ref(false);
let dataSource = ref([]);
let page = ref(1);
let pageSize = ref(10);
let total = ref(0);
// 初始入参
let paramsData = ref();

// 搜索区域数据(非插槽，配置项)
let searchField = reactive<Record<string, string>>({});

// 初始化列表
const init = (params: any) => {
  paramsData.value = params;
  getList();
};

// 点击搜索
const onSearch = () => {
  getList({ ...paramsData.value, ...props.query, ...searchField });
};

// 点击重置
const onReset = () => {
  page.value = 1;
  pageSize.value = 10;
  for (let key in searchField) {
    searchField[key] = "";
  }
  emits("reset");
  getList({ ...paramsData.value, ...props.query, ...searchField });
};

// 列表请求
const getList = async (params?: Record<string, string>) => {
  loading.value = true;
  try {
    const res = await props.apiFunc({
      page: unref(page),
      limit: unref(pageSize),
      ...params,
      ...paramsData.value,
    });
    dataSource.value = props.isTree ? res.data : res.data.list;
    total.value = res.data.total;
  } catch (error: any) {
    ElMessage(error.ElMessage);
  } finally {
    loading.value = false;
  }
};

// 点击侧边选择
const selectAside = (data: any) => {
  emits("changeAside", data);
};

// 分页器发生变化时重新请求列表
watch(
  () => [unref(page), unref(pageSize)],
  () => {
    getList({ ...paramsData.value, ...props.query, ...searchField });
  }
);

defineExpose({
  getList,
  onReset,
  init,
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
