<template>
  <el-form-item v-bind="$attrs" :rules="rules" :prop="prop" :label="label">
    <el-input
      v-model="modelValue"
      v-bind="$attrs"
      clearable
      type="textarea"
      :rows="5"
      @input="update"
      :placeholder="getPlaceholder"
    >
      <template #suffix>
        <slot name="suffix"></slot>
      </template>
    </el-input>
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
  // 验证手机号
  verifyTel?: boolean;
  // 验证邮箱
  verifyEmail?: boolean;
  // 验证身份证
  verifyIDCard?: boolean;
  // 验证密码
  verifyPassword?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  required: false,
});
const emit = defineEmits(["update:value"]);
let modelValue = ref(props.value);

const getPlaceholder = computed(() => {
  return props.placeholder ? props.placeholder : `请输入${props.label || ""}`;
});

const rules = computed(() => {
  let rulesArr: any = [];
  props.required &&
    rulesArr.push({ required: true, message: `请输入${props.label || ""}` });
  props.verifyTel &&
    rulesArr.push({
      pattern: /^1[3456789]\d{9}$/,
      message: "请输入正确格式的手机号码",
    });
  props.verifyEmail &&
    rulesArr.push({
      pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      message: "请输入正确格式的邮箱",
    });
  props.verifyIDCard &&
    rulesArr.push({
      pattern:
        /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9xX]$/,
      message: "请输入正确格式的身份证号",
    });
  props.verifyPassword &&
    rulesArr.push({
      pattern:
        /(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,}$/,
      message: "密码至少8个字符，至少含字母和数字",
    });

  return rulesArr;
});

const update = () => {
  emit("update:value", modelValue.value);
};
</script>
<style lang="scss" scoped></style>
