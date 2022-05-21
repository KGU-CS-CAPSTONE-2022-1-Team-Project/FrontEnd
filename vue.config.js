const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/common':{
        target : 'https://capston-blockapp.greenflamingo.dev:10321/',
        changeOringin: true
      },
      '/partnet':{
        target : 'https://capston-blockapp.greenflamingo.dev:10321/',
        changeOringin: true
      },
      'owner':{
        target : 'https://capston-blockapp.greenflamingo.dev:10321/',
        changeOringin: true
      }
    }
  }
})