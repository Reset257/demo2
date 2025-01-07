<template>
  <div class="Form">
    <el-form :model="formInline" ref="formRef">
      <main>
        <slot name="content"></slot>
      </main>
      <footer v-if="!hideFooter">
        <el-form-item>
          <el-button type="primary" @click="validateForm">
            {{ submitText }}
          </el-button>
          <el-button v-if="!hideCancel" @click="emit('onCancel')">
            返回
          </el-button>
        </el-form-item>
      </footer>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
interface IProps {
  // 双向绑定值
  model: string | number;
  submitText?: string;
  hideFooter?: boolean;
  hideCancel?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  hideFooter: false,
  hideCancel: false,
  submitText: "保存",
});
const emit = defineEmits(["submitForm", "onCancel"]);

const formRef = ref<any>();
const formInline = ref<any>(props.model);

const validateForm = async () => {
  if (!formRef.value) return;
  formRef.value.validate((valid: any) => {
    if (valid) {
      emit("submitForm");
    } else {
      return false;
    }
  });
};

defineExpose({
  formRef,
});
</script>
<style lang="scss" scoped>
.Form {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  // height: calc(100vh - 107px);
  height: 100%;
  padding: 30px;
  background-color: #fff;

  ::v-deep {
    .el-form {
      height: 100%;

      main {
        height: 95%;
      }

      footer {
        .el-form-item__content {
          justify-content: center;
        }
      }
    }
  }
}
</style>
