const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'vue2-dropzone': 'vue2-dropzone/dist/vue2Dropzone.js',
      },
    },
  },
})
