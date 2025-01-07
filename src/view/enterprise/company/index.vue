<template>
  <div class="tenant">
    <component
      :is="pageType === 'list' ? List : NewForm"
      @change="changePage"
    ></component>
  </div>
</template>
<script lang="ts" setup>
import { IPageType } from "./data";
import NewForm from "./new.vue";
import List from "./list.vue";

let pageType = ref<IPageType>("list");

const changePage: any = (page: IPageType) => {
  pageType.value = page;
};
</script>
<style lang="scss" scoped>
.tenant {
  height: 100%;
}
</style>
