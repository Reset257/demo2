<template>
  <el-form-item v-bind="$attrs" :rules="rules" :prop="prop" :label="label">
    <el-radio-group
      v-model="modelValue"
      v-bind="$attrs"
      @change="update"
      :placeholder="getPlaceholder"
    >
      <el-radio
        v-for="item in getOptions"
        :key="item.value"
        :label="item.value"
      >
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>
<script lang="ts" setup>
interface IProps {
  // 双向绑定值
  value?: string | number;
  // 属性值
  prop: string;
  // 必填
  required?: boolean;
  placeholder?: string;
  label?: string;
  // 下拉选项
  options: Record<string, string | number>;
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
    ? [{ required: true, message: `请输入${props.label}` }]
    : [];
});

const getOptions = computed(() => {
  const res = Object.keys(props.options).map((e: string) => ({
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
