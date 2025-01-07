# Vue 3 + TypeScript + Vite

node 版本 18.13.0

## 初始化

```JavaScript
// 安装依赖
npm install

// 运行项目
npm run dev
```

## 快速生成 vue 模板

在 vscode 左下角设置-设置用户代码片段-搜索 vue，打开 vue.json 文件，自定义适合自己代码习惯的代码块，提供示例：

```JavaScript
{
    "Print to console": {
        "prefix": "vue",
        "body": [
            "<template>",
            "  <div>",
            "    $0",
            "  </div>",
            "</template>",
            "<script setup lang='ts' >",

            "</script>",
            "<style lang='scss' scoped>",
            "",
            "</style>"
        ],
        "description": "Create VUE template"
    }
}
```

后续新建 vue 文件，直接输入 vue，可快速生成模板

## 样式复用

项目使用了 scss，mixin.scss 文件声明了一些可能重复使用的样式，并使用混入 @mixin，遇到需要使用时，直接 @include 即可应用样式

```scss
// mixin.scss 文件
@mixin greenyellow {
  color: greenyellow;
}

// 使用
span {
    @include greenyellow;
}
```

## 自动导入引入组件

无需自己引入 component 里面的全局组件就可以直接使用 

## 动态菜单

### 设置

全局状态 `isDynamicMenu: true` 设置项目是动态菜单

### 后端接口基本数据结构

* 外层路由 path 需要加 '/'，子路由不用；
* isSingleMenu 表示菜单是类似首页这种路由有双层但是菜单却只一层的结构
* 接口必要字段如下，可做自定义配置（configMap）

```JS
        {
            "name": "system",
            "path": "/system",
            "children": [{
                    "name": "menu",
                    "path": "menu",
                    "children": null,
                    "component": "system/menu/index.vue",
                    "icon": "icon-liebiao",
                    "index": 21,
                    "title": "菜单管理"
                    "isSingleMenu": false,
                    "redirect": ''
                },

            ],
            "component": "Layout",
            "icon": "icon-setup",
            "title": "系统设置",
            "index": 99,
            "isSingleMenu": false,
            "redirect": ''
        },
```

## 引入 tailwindcss 原子化 css

不建议滥用，图方便，组件还是尽量颗粒度细化

## 持续优化

axios 优化
请求加载状态
Table 封装，搜索区域类型拓展，下拉选项集成 label，单元格内容简单格式化显示 render，列宽度配置 width(还是不够简便)
table 日历搜索，按钮设置隐藏属性
文件上传组件
解决编辑回填的痛点
全局样式快捷定义
链表实现拖拽
jenkins 打包优化
games101 图形学入门
css 动画打字效果等
