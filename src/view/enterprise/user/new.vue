<template>
  <div class="new">
    <TitleBox
      title="用户信息"
      desc="用户基本信息和详细信息以及项目分配岗位分配"
    />
    <FormBox
      :model="formInline"
      @submitForm="submitForm"
      @onCancel="emit('onBack')"
    >
      <template #content>
        <TitleBox title="基本信息" inline>
          <template #content>
            <el-row :gutter="20">
              <el-col :span="8">
                <Input
                  label="用户登录名"
                  prop="name"
                  v-model="formInline.name"
                />
              </el-col>
              <el-col :span="8">
                <Input
                  label="用户姓名"
                  prop="address"
                  v-model="formInline.address"
                />
              </el-col>
              <el-col :span="8">
                <Input
                  verifyTel
                  label="手机号码"
                  prop="address"
                  v-model="formInline.address"
                />
              </el-col>
              <el-col :span="8">
                <Input
                  verifyEmail
                  label="邮箱"
                  prop="address"
                  v-model="formInline.address"
                />
              </el-col>
              <el-col :span="8">
                <Input
                  verifyIDCard
                  label="身份证号"
                  prop="address"
                  v-model="formInline.address"
                />
              </el-col>
              <el-col :span="8">
                <Input
                  verifyPassword
                  label="微信状态"
                  prop="address"
                  v-model="formInline.address"
                />
              </el-col>
            </el-row>
          </template>
        </TitleBox>
        <TitleBox title="详细信息" inline>
          <template #content>
            <el-row :gutter="20">
              <el-col :span="8">
                <Input
                  required
                  label="任务名"
                  prop="name"
                  v-model="formInline.name"
                />
              </el-col>
              <el-col :span="8">
                <Input
                  label="任务描述"
                  prop="address"
                  v-model="formInline.address"
                />
              </el-col>
              <el-col :span="8">
                <Input
                  label="执行人"
                  prop="address"
                  v-model="formInline.address"
                />
              </el-col>
            </el-row>
          </template>
        </TitleBox>
      </template>
    </FormBox>
  </div>
</template>
<script lang="ts" setup>
import { addCompany } from "@/api/company/index";

const emit = defineEmits(["onBack"]);
const formInline = reactive<any>({});

const submitForm = async () => {
  await addCompany(formInline).then((res) => {
    console.log(res);
  });
  // emit("onBack");
};
</script>
<style lang="scss" scoped>
.newForm {
  box-sizing: border-box;
  height: 100%;
  padding: 30px;
  background-color: #fff;
}
</style>
