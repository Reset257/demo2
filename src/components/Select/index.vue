<template>
  <el-form-item v-bind="$attrs" :rules="rules" :prop="prop" :label="label">
    <el-select
      v-model="modelValue"
      v-bind="$attrs"
      @change="update"
      clearable
      :placeholder="getPlaceholder"
    >
      <el-option v-for="item in getOptions" :key="item.value" v-bind="item" />
    </el-select>
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
  // 下拉选项
  options: Record<string, string | number> | any;
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

const getOptions = computed(() => {
  const isArr = Object.prototype.toString.call(props.options);
  const res =
    isArr === "[object Array]"
      ? props.options
      : Object.keys(props.options).map((e: string) => ({
          label: props.options[e],
          value: e,
        }));
  return res;
});

const update = () => {
  emit("update:value", modelValue.value);
};
</script>
<style lang="scss" scoped></style>
