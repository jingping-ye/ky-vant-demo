# MonacoEditor 功能说明

> 基于monaco和vue的编辑器

## 图例



## 属性

| 参数       | 说明                             | 类型          | 可选值              | 默认值     |
| ---------- | -------------------------------- | ------------- | ------------------- | ---------- |
| diffEditor | 开启代码对比模式                 | Boolean       | -                   | false      |
| width      | 编辑器的宽度                     | String/Number | -                   | 100%       |
| height     | 编辑器的高度                     | String/Number | -                   | 100%       |
| origin     | 原始数据，仅在代码对比模式下有效 | String        | -                   | -          |
| language   | 语言类型                         | String        | javascript/json...  | javascript |
| theme      | 主题颜色                         | String        | vs/hc-black/vs-dark | vs         |
| value      | 编辑器内容                       | String        | -                   | -          |
| options    | 编辑器配置                       | Object        | 看下面options配置   | {}         |

### options配置

| 参数                 | 说明                      | 类型    | 可选值 | 默认值 |
| -------------------- | ------------------------- | ------- | ------ | ------ |
| readOnly             | 是否只读                  | Boolean | -      | false  |
| minimap:{enable:xxx} | 是否开启右侧迷你小地图    | Boolean | -      | false  |
| fontSize             | 字体大小[建议在14-28之间] | Number  | -      | 14     |
| fontFamily           | 字体类型                  | String  | -      | -      |
| fontWeight           | 字体粗细                  | String  | -      | -      |
| lineHeight           | 行高                      | Number  | -      | -      |
| lineNumbers          | 是否显示行号              | Boolean | -      | true   |

更多options参照[monaco options](https://github.com/microsoft/monaco-editor/blob/3f5e937cf1cae88a7be1b6faf574e9c079dd99a4/monaco.d.ts#L2508)



### 生命周期事件属性

| 参数                          | 说明         |
| ----------------------------- | ------------ |
| editorBeforeMount(monaco)     | 编辑器挂载前 |
| editorMounted(editor, monaco) | 编辑器挂载后 |

## 事件

| 事件名称 | 说明               | 回调参数       |
| -------- | ------------------ | -------------- |
| change   | 输入数据改变时触发 | (value,event)  |
| input    | 输入数据时触发     | (value)        |
| blur     | 光标移除编辑器     | (value, event) |

## 示例

### 作为编辑器使用

```js
<template>
  <div id="app">
    <MonacoEditor
      height="300"
      :value="initValue"
      theme="vs"
      language="json"
      :options="options"
      @blur="onBlur"
    ></MonacoEditor>
  </div>
</template>

<script>
import MonacoEditor from "@/views/components/MonacoEditor";
export default {
  name: "App",
  components: {
    MonacoEditor
  },
  computed: {
    initValue() {
      return JSON.stringify(this.value, null, 4);
    }
  },
  data() {
    return {
      options: {},
      value: {
        title: "新的值",
        type: {
          type: "12",
          application: "使用",
          dayData: "123456",
          yearData: "654321",
          description: "描述a"
        },
        application: "使用",
        dayData: "123456",
        yearData: "654321",
        description: "描述a"
      },
      origin: {
        title: "原始值",
        type: {
          type: "12",
          application: "使用",
          dayData: "123456",
          yearData: "654321",
          description: "描述a"
        },
        application: "使用",
        dayData: "123456",
        yearData: "654321",
        description: "描述a"
      }
    };
  },
  methods: {
    onBlur(value) {
      this.value = JSON.parse(value);
      console.log("onBlur", this.value);
    }
  }
};
</script>
```

### 对比代码

> 只用于显示

```js
<template>
  <div id="app">
    <a-row>
      <a-col :span="12">初始代码</a-col>
      <a-col :span="12">新代码</a-col>
    </a-row>
    <MonacoEditor
      height="300"
      :diffEditor="true"
      :original="myOrigin"
      :value="myValue"
      language="json"
      :options="options"
    ></MonacoEditor>
  </div>
</template>

<script>
import MonacoEditor from "@/views/components/MonacoEditor";
export default {
  name: "App",
  components: {
    MonacoEditor
  },
  computed: {
    myValue() {
      return JSON.stringify(this.value, null, 4);
    },
    myOrigin() {
      return JSON.stringify(this.origin, null, 4);
    }
  },
  data() {
    return {
      options: {
        readOnly: true
      },
      value: {
        title: "新的值",
        type: {
          type: "12",
          application: "使用",
          dayData: "123456",
          yearData: "654321",
          description: "描述a"
        },
        application: "使用",
        dayData: "123456",
        yearData: "654321",
        description: "描述a"
      },
      origin: {
        title: "原始值",
        type: {
          type: "12",
          application: "使用",
          dayData: "123456",
          yearData: "654321",
          description: "描述a"
        },
        application: "使用",
        dayData: "123456",
        yearData: "654321",
        description: "描述a"
      }
    };
  }
};
</script>

```

