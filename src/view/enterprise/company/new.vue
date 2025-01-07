<template>
  <FormBox
    :model="formInline"
    @submitForm="submitForm"
    @onCancel="emits('change', 'list')"
  >
    <template #content>
      <el-row :gutter="20">
        <el-col :span="8">
          <Input label="公司名称" prop="name" v-model="formInline.name" />
        </el-col>
        <el-col :span="8">
          <Input label="地址" prop="address" v-model="formInline.address" />
        </el-col>
        <el-col :span="8">
          <Select
            prop="type"
            v-model="formInline.type"
            label="类型"
            required
            :options="companyTypeEnum"
          ></Select>
        </el-col>
        <el-col :span="8">
          <TreeSelect
            prop="parentId"
            v-model="formInline.parentId"
            label="所属上级单位"
            :props="{ label: 'name', value: 'id' }"
            :data="companyTree"
          ></TreeSelect>
        </el-col>
      </el-row>
    </template>
  </FormBox>
</template>
<script lang="ts" setup>
import { companyTypeEnum } from "@/utils/enum";
import { addCompany } from "@/api/company/index";
import { getCompanyOptions } from "@/api/company/index";

const emits = defineEmits(["change"]);
const formInline = reactive<any>({});

const companyTree = ref<any[]>([]);

const submitForm = async () => {
  await addCompany({
    ...formInline,
  }).then((res) => {
    console.log(res);
  });
  emits("change", "list");
};

const getCompanyTree = async () => {
  await getCompanyOptions().then((res) => {
    if (res.code === 200) {
      companyTree.value = res.data;
    }
  });
};

onMounted(() => {
  getCompanyTree();
});
</script>
<style lang="scss" scoped>
.newForm {
  box-sizing: border-box;
  height: 100%;
  padding: 30px;
  background-color: #fff;
}
</style>
