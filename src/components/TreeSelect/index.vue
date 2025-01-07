<template>
  <el-form-item v-bind="$attrs" :rules="rules" :prop="prop" :label="label">
    <el-tree-select
      v-model="modelValue"
      v-bind="$attrs"
      :data="data"
      clearable
      :placeholder="getPlaceholder"
      @change="update"
    />
  </el-form-item>
</template>
<script lang="ts" setup>
interface IProps {
  // 双向绑定值
  value: string | number;
  // 属性值
  prop: string;
  // 必填
  required?: boolean;
  placeholder?: string;
  label?: string;
  // 下拉数据
  data: Record<string, string | number>;
}

const props = withDefaults(defineProps<IProps>(), {
  required: false,
});
const emit = defineEmits(["update:value"]);

let modelValue = ref(props.value);

const getPlaceholder = computed(() => {
  return props.placeholder ? props.placeholder : `请选择${props.label || ""}`;
});

const rules = computed(() => {
  return props.required
    ? [{ required: true, message: `请选择${props.label}` }]
    : [];
});

const update = () => {
  emit("update:value", modelValue.value);
};
</script>
<style lang="scss" scoped></style>
