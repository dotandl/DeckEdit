module.exports = {
  publicPath: '/DeckEdit',

  lintOnSave: false,

  configureWebpack: {
    devtool: 'source-map',
  },

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'DeckEdit'
      return args
    })
  },

  transpileDependencies: ['vuetify'],
}
