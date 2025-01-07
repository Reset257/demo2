<template>
  <Dialog ref="formDialogRef" :title="getTitle" width="40%" @submit="onSubmit">
    <template #content>
      <FormBox :model="formInline" ref="formBoxRef" hideFooter>
        <template #content>
          <el-row :gutter="20">
            <el-col :span="24" v-for="item in schemas" :key="item.field">
              <component
                v-bind="item"
                v-model="formInline[item.field]"
                :is="componentsMap[item.component]"
                :prop="item.field"
              />
            </el-col>
          </el-row>
        </template>
      </FormBox>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import useDialog from "@/hook/useDialog";
import { ISchemas } from "./interface";
import Input from "@/components/Input/index.vue";
import Radio from "@/components/Radio/index.vue";
import Select from "@/components/Select/index.vue";
import TreeSelect from "@/components/TreeSelect/index.vue";
import Textarea from "@/components/Textarea/index.vue";
import ApiSelect from "@/components/ApiSelect/index.vue";
import { elFormErrorScrollIntoView } from "@/utils/common";

interface IFormDialogProps {
  schemas: ISchemas[];
}

const props = defineProps<IFormDialogProps>();

const componentsMap: any = {
  Input: Input,
  Radio: Radio,
  Select: Select,
  TreeSelect: TreeSelect,
  Textarea: Textarea,
  ApiSelect: ApiSelect,
};
const {
  dialogRef: formDialogRef,
  openDialog,
  initData,
  closeDialog,
} = useDialog();
const emit = defineEmits(["submit"]);
const formInline = reactive<any>({});
let formBoxRef = ref();
const getTitle = computed(() => {
  return initData.value === "add" ? "新增" : "编辑";
});

const onSubmit = async () => {
  formBoxRef.value.formRef.validate((valid: any) => {
    if (valid) {
      closeDialog();
      emit("submit", initData.value, formInline);
    } else {
      setTimeout(() => {
        elFormErrorScrollIntoView();
      }, 100);
      return false;
    }
  });
};

onMounted(() => {
  // 填充默认值
  props.schemas.forEach((e) => {
    e.defaultValue && (formInline[e.field] = e.defaultValue);
  });
});

defineExpose({
  openDialog,
});
</script>
<style lang="scss" scoped></style>
