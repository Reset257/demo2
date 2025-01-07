<template>
  <el-form-item v-bind="$attrs" :rules="rules" :prop="prop" :label="label">
    <el-select
      v-model="modelValue"
      v-bind="$attrs"
      value-key="id"
      @change="update"
      clearable
      :placeholder="getPlaceholder"
    >
      <el-option
        v-for="item in option"
        :key="item[optionConfig['id']]"
        :label="item[optionConfig['name']]"
        :value="item"
      />
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
  // 下拉请求
  api: (param?: any) => any;
  // 配置选项属性显示
  optionConfig?: any;
}

const props = withDefaults(defineProps<IProps>(), {
  required: false,
  optionConfig: {
    id: "id",
    name: "name",
  },
});
const emit = defineEmits(["update:value"]);

let modelValue = ref(props.value);
const option = ref<any[]>([]);
const getPlaceholder = computed(() => {
  return props.placeholder ? props.placeholder : `请选择${props.label || ""}`;
});

const rules = computed(() => {
  return props.required
    ? [{ required: true, message: `请选择${props.label}` }]
    : [];
});

// 动态请求下拉选项
const getOptions = async () => {
  await props.api().then((res: any) => {
    if (res.flag && res.data && res.data?.length) {
      option.value = res.data;
    }
  });
};

onMounted(() => {
  getOptions();
});

const update = () => {
  emit("update:value", modelValue.value);
};
</script>
<style lang="scss" scoped></style>
