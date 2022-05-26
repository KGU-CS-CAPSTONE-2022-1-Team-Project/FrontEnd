const {defineConfig} = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
    transpileDependencies: [
        'vuetify'
    ],
    chainWebpack: config => {
        config.resolve.merge({
            fallback: {
                fs: false, net: false
            }
        });
        config.plugin('polyfills').use(NodePolyfillPlugin);
    },
})