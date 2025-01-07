<template>
  <div :class="['titleBox', inline ? 'inline' : '']">
    <div class="title">{{ title }}</div>
    <div class="desc">{{ desc }}</div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface IProps {
  title: string;
  desc?: string;
  // 内置没有 padding
  inline?: boolean;
}

withDefaults(defineProps<IProps>(), {
  inline: false,
});
</script>
<style lang="scss" scoped>
.titleBox {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;

  .title {
    margin-bottom: 10px;
    color: #000;
    font-size: 20px;
  }

  .desc {
    color: #999;
    font-size: 15px;
  }

  .content {
    padding-top: 10px;
  }
}

.inline {
  padding: 0;
}
</style>
