const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

const isPreview = process.env.NODE_ENV === "preview";

const vueConfig = {
  publicPath: isPreview ? "" : "/jinzhou/",
  outputDir: "dist",
  productionSourceMap: false,
  chainWebpack: (config) => {
    //  去除各种console语句
    config.optimization.minimizer("terser").tap((args) => {
      args[0].terserOptions.compress.warnings = false;
      args[0].terserOptions.compress.drop_console = true;
      args[0].terserOptions.compress.pure_funcs = ["console.*"];
      return args;
    });
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          // //这是基准值，在375px的屏幕变大rem的值会变大，小于这个大小元素的rem值会变小
          pxtorem({
            rootValue: 37.5,
            propList: ["*"],
          }),
        ],
      },
    },
  },
  devServer: {
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
module.exports = vueConfig;
