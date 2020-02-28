const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname,'src/js/app.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname,'dist/js'),
    filename:'bundle.js' 
  },
  devServer:{
    open:true
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          {
            loader:MiniCSSExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new MiniCSSExtractPlugin({
      filename:'[name].css'
    }),
    new HtmlWebpackPlugin({
      title:'Webpack Dev Server'
    })
  ]
}