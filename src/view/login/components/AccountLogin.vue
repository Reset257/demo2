<template>
  <div class="AccountLogin">
    <FormBox
      :model="formData"
      @submitForm="submitForm"
      hideCancel
      submitText="登录"
    >
      <template #content>
        <Input required prop="username" v-model="formData.username" />
        <Input
          required
          prop="password"
          v-model="formData.password"
          show-password
        />
        <Input required prop="code" v-model="formData.code">
          <template #suffix>
            <img
              :src="'data:image/png;base64,' + codeImgSrc"
              @click="getCaptchaImage"
            />
          </template>
        </Input>
      </template>
    </FormBox>
  </div>
</template>
<script lang="ts" setup>
import rsa from "@/utils/rsa";
import router from "@/router/index";
import { setToken } from "@/utils/cookies";
// import { useUserStore } from "@/store/user";
import { getCaptchaImageApi, loginByUser } from "@/api/login/index";
import { IAccountLogin } from "../interface";

// interface IProps {
//   loginRole: ILoginRole;
// }

// const props = defineProps<IProps>();
// const userStore = useUserStore();
let key = ref<number>();
let codeImgSrc = ref("");
const formData = reactive<IAccountLogin>({
  username: "测试账号",
  password: "Gibs1234567",
});
const submitForm = async () => {
  const res = await loginByUser({
    ...formData,
    password: rsa.rsaPublicData(formData.password!),
    key: key.value,
  });
  if (res.code === 200) {
    setToken(res.data.access_token);
    // userStore.setUserInfo(res.data.userInfo);
    router.push("/home");
  } else {
    getCaptchaImage();
  }
};

onMounted(() => {
  getCaptchaImage();
});

const getCaptchaImage = async () => {
  key.value = new Date().getTime();
  const res: any = await getCaptchaImageApi({
    type: "char",
    key: key.value,
  });
  if (res.code === 200) {
    codeImgSrc.value = res.img;
  }
};
</script>
<style lang="scss" scoped>
.AccountLogin {
  min-width: 500px;

  ::v-deep(.el-button) {
    width: 100%;
    height: 40px;
    font-size: 16px;
  }

  img {
    width: 150px;
    height: 100%;
    margin-right: -10px;
  }
}
</style>
