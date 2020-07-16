# compressHelper

> 压缩文件夹助手，帮助快速压缩文件夹
> dev --> dev.2020619102838.zip(时间)

## 配置

需在项目根目录下配置`compressHelper.json`文件来配置要压缩的文件夹

```json
{
  "compressDir": [
    {
      "dir": "prod", // 要压缩的文件夹
      "title": "生产环境" // 对文件夹内容的解释
    },
    {
      "dir": "src/dev", // 配置路径
      "title": "开发环境"
    }
  ]
}
```

## 其他

- 压缩的文件夹将和源文件夹在同一层级
