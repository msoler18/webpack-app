const path = require('path')

module.exports = {
  entry:{
    home:path.resolve(__dirname,'dist/src/js/home.js'),
    contact:path.resolve(__dirname,'dist/src/js/contact.js'),
    price:path.resolve(__dirname,'dist/src/js/prices.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'js/[name].js' 
  }
}