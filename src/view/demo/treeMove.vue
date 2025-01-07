<template>
  <el-tree
    style="max-width: 600px; font-size: 16px"
    :data="treeData"
    :key="key"
    default-expand-all
    :props="defaultProps"
  >
    <template #default="{ node, data }">
      <span class="flex">
        <span>{{ node.label }}</span>
        <span>
          <a @click.stop="moveUp(treeData, data.id)"> 上移 </a>
          <a class="m-2" @click.stop="moveDown(treeData, data.id)"> 下移 </a>
        </span>
      </span>
    </template>
  </el-tree>
</template>
<script lang="ts" setup>
import {
  ComponentInternalInstance,
  getCurrentInstance,
} from "@vue/runtime-core";

//获取app实例
let instance: ComponentInternalInstance | null = getCurrentInstance();
const key = ref(0);
/*  找到节点及其父节点 { node, parent, index } */
const findNodeAndParent = (tree: any, nodeId: string, parent = null) => {
  for (let i = 0; i < tree.length; i++) {
    // 出口
    if (tree[i].id === nodeId) {
      return { node: tree[i], parent: parent, index: i };
    }
    if (tree[i].children) {
      const result: any = findNodeAndParent(tree[i].children, nodeId, tree[i]);
      if (result) return result;
    }
  }
};

/* 上移结点 */
const moveUp = (tree: any, nodeId: string) => {
  const { parent, index } = findNodeAndParent(tree, nodeId);
  if (parent) {
    const siblings = parent.children;
    if (index > 0) {
      [siblings[index - 1], siblings[index]] = [
        siblings[index],
        siblings[index - 1],
      ];
    }
  } else {
    if (index > 0) {
      [tree[index - 1], tree[index]] = [tree[index], tree[index - 1]];
    }
  }
  key.value++;
  instance?.proxy?.$message("上移成功!");
};

/* 下移结点 */
const moveDown = (tree: any, nodeId: string) => {
  const { parent, index } = findNodeAndParent(tree, nodeId);
  if (parent) {
    const siblings = parent.children;
    if (index < siblings.length - 1) {
      // 交换节点
      [siblings[index], siblings[index + 1]] = [
        siblings[index + 1],
        siblings[index],
      ];
    }
  } else {
    if (index < tree.length - 1) {
      // 交换节点
      [tree[index], tree[index + 1]] = [tree[index + 1], tree[index]];
    }
  }
  key.value++;
  instance?.proxy?.$message.success("下移成功!");
};

const treeData: any = [
  {
    label: "Level one 1",
    id: 1,
    children: [
      {
        label: "Level two 1-1",
        id: 11,
        children: [
          {
            id: 111,
            label: "Level three 1-1-1",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 2",
    id: 2,
    children: [
      {
        id: 21,
        label: "Level two 2-1",
        children: [
          {
            id: 211,
            label: "Level three 2-1-1",
          },
        ],
      },
      {
        id: 22,
        label: "Level two 2-2",
        children: [
          {
            id: 221,
            label: "Level three 2-2-1",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 3",
    id: 3,
    children: [
      {
        id: 31,
        label: "Level two 3-1",
        children: [
          {
            id: 311,
            label: "Level three 3-1-1",
          },
        ],
      },
      {
        id: 32,
        label: "Level two 3-2",
        children: [
          {
            id: 321,
            label: "Level three 3-2-1",
          },
        ],
      },
    ],
  },
];

const defaultProps = {
  children: "children",
  label: "label",
};
</script>
