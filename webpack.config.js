var webpack = require('webpack')
var extractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './public/app.js',
    vendor: ['react']
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      exclude: /(node_module)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'] // 历经各种问题，总之babel版本变化特别快，要根据babel官网的来
      }
    },
      {
        test: /\.css$/,
        // loader: 'style!css'
        // loader:extractTextPlugin.extract("css"),
        // loader:extractTextPlugin.extract("css"),
        loader: extractTextPlugin.extract('css?modules&importLoaders=2&localIdentName=[name]_[local]___[hash:base64:5]'),
      // 很是不理解巨坑一个
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=10000&name=static/images/[name].[ext]',
        // query: { mimetype: 'image/png' }
        // 这里好像是超过一定的大小就会放到文件夹中，不然就会放到bundle中
      }
    ]

  },
  plugins: [
    new extractTextPlugin('styles.css'), // 将css独立打包出来，就不用style-loader了
    // new webpack.optimize.CommonsChunkPlugin({}),
    // new webpack.optimize.UglifyJsPlugin({minimize:true}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',

      // filename: "vendor.js"
      // (Give the chunk a different name)

      minChunks: Infinity,
    // (with more entries, this ensures that no other module
    //  goes into the vendor chunk)
    })
  ],

  watch: true, // 保证每次保存时会自动打包

}
