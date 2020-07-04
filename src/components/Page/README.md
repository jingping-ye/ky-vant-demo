# Page 功能说明

> 页面（顶部导航栏 + 内容容器）

## 图例

![example](example.jpg)

## 属性

| 参数        | 说明                                 | 类型    | 可选值 | 默认值   |
| ----------- | ------------------------------------ | ------- | ------ | -------- |
| title       | 开启代码对比模式                     | String  | -      | 默认标题 |
| leftText    | 左侧文字，需要和 isNeedLeft 配合使用 | String  | -      | -        |
| rightText   | 右侧文字，需要和 isNeedLeft 配合使用 | String  | -      | -        |
| showNav     | 是否显示顶部导航                     | Boolean | -      | true     |
| isNeedRight | 是否需要右侧                         | Boolean | -      | false    |
| isNeedLeft  | 是否需要左侧                         | Boolean | -      | true     |

## 事件

| 事件名称     | 说明     | 回调函数 |
| ------------ | -------- | -------- |
| onClickLeft  | 点击左侧 | ()       |
| onClickRight | 点击右侧 | ()       |

## 示例

### 普通使用

```js
<template>
  <div class="index">
    <Page title="index首页">
     index首页组件
    </Page>
  </div>
</template>
<script>
import Page from "@/components/Page/Page";
export default {
  name: "index",
  mixins: [],
  components: {
    Page,
  },
  props: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.index {
}
</style>

```

### 自定义回退事件

```js
<template>
  <div class="about">
    <Page title="about页面" :routerNav="goBack">
      about页面
    </Page>
  </div>
</template>
<script>
import Page from "@/components/Page/Page";
export default {
  name: "index",
  mixins: [],
  components: {
    Page,
  },
  props: {},
  data() {
    return {
    };
  },
  methods: {
    //	跳转到首页
    goBack() {
      this.$router.go({
        name: "Index",
      });
    },
  },
};
</script>
<style scoped>
.about {
}
</style>
```
