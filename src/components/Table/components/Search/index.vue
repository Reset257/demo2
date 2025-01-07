<template>
  <div class="tableHeader">
    <div class="left">
      <template v-if="schemas">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <div class="form">
            <el-row :gutter="20">
              <el-col :span="8" v-for="item in schemas" :key="item.field">
                <el-form-item :label="item.label">
                  <el-input
                    v-if="item.component === 'Input'"
                    v-model="form[item.field]"
                    :placeholder="item.placeholder || `请输入${item.label}`"
                  />
                  <el-select
                    v-model="form[item.field]"
                    v-if="item.component === 'Select'"
                  >
                    <el-option
                      v-for="option in item.componentProps?.options"
                      :key="option.value"
                      :label="option.label"
                      :value="option.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-form>
      </template>
      <slot name="SearchForm"></slot>
    </div>
    <div class="right">
      <el-button type="primary" @click="onSearch">查询</el-button>
      <el-button @click="onReset">重置</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface IProps {
  schemas?: any[];
}
defineProps<IProps>();
const emit = defineEmits(["update:modelValue"]);

const form = reactive<any>({});

const onSearch = () => {
  emit("update:modelValue", Object.assign({}, form));
};

const onReset = () => {
  for (let key in form) {
    form[key] = "";
  }
  emit("update:modelValue", Object.assign({}, { ...form, isReset: true }));
};
</script>
<style lang="scss" scoped>
.tableHeader {
  display: flex;
  justify-content: space-between;
  padding: 0 0 15px 0;

  .left {
    flex: 1;
  }
}
</style>
