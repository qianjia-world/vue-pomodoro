const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        additionalData: `@import "~@/styles/variables.scss";`
      },
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-pomodoro/'
    : '/'
});