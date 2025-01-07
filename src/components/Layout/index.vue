<template>
  <div class="layout">
    <aside><Side /></aside>
    <main>
      <Header></Header>
      <div class="page">
        <router-view></router-view>
      </div>
      <Footer></Footer>
    </main>
  </div>
</template>
<script lang="ts" setup>
import Side from "./components/Side.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;

  aside {
    height: 100vh;
    background-color: #fff;
    border-right: 1px solid #eee;
    overflow-y: hidden;
  }

  main {
    flex: 1;
    width: 0;
    display: flex;
    flex-direction: column;
    height: 100%;

    .page {
      flex: 1;
      height: 0;
      padding: 20px;
      background-color: #f5f5f5;
    }
  }
}
</style>
