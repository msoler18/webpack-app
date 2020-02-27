const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname,'src/js/app.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname,'dist/js'),
    filename:'bundle.js' 
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
    new MiniCSSExtractPlugin({
      path: path.resolve(__dirname,'dist/css'),
      filename:'[name].css'
    }),
    new HtmlWebpackPlugin({
      path: path.resolve(__dirname,'dist'),
      title:'Plugins'
    })
  ]
}