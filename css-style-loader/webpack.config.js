const path = require('path')

module.exports = {
  entry: path.resolve(__dirname,'dist/src/js/app.js'),
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
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}