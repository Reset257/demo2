<template>
  <div>
    <section class="simple">
      <div
        class="item"
        v-for="item in list"
        :key="item.id"
        draggable="true"
        @dragstart="onDragStart(item.id, $event)"
        @dragover.prevent
        @dragenter="onDragEnter(item.id, $event)"
        @dragend="onDragEnd"
        @drop="onDrop(item.id, $event)"
      >
        {{ item.name }}
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
let list: any = [];
for (let i = 0; i < 20; i++) {
  list.push({ name: `模块 ${i}`, id: i });
}

const onDragStart = (index, $event) => {
  console.log("🚀", index, $event);
};

const onDragEnter = (index, $event) => {
  console.log("🚀", index, $event);
};

const onDrop = (index, $event) => {
  console.log("🚀", index, $event);
};

const onDragEnd = () => {
  console.log("🚀 ~ onDragEnd ~ onDragEnd:");
};
</script>
<style lang="scss" scoped>
.simple {
  height: 600px;
  overflow-y: scroll;

  .item {
    width: 200px;
    margin-bottom: 10px;
    padding: 10px;
    text-align: center;
    border: 1px solid #999;
    cursor: pointer;
  }
}
</style>
