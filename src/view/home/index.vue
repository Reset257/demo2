<template>
  <div class="scss">
    <div class="top">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="map">
            <MapContainer></MapContainer>
          </div>
        </el-col>
        <el-col :span="12"> </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.scss {
  padding: 20px;

  ::v-deep(.el-row) {
    height: 100%;
  }

  span {
    @include greenyellow;
  }

  .top {
    height: 400px;

    .map {
      height: 100%;
      padding: 10px;
      background-color: #fff;
    }
  }
}
</style>
