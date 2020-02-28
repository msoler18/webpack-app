import '../css/styles.css'
import inyectContent from './inyectContent'


inyectContent()

if(module.hot){
  module.hot.accept('./inyectContent.js',function(){
    inyectContent()
    console.log("Hot module replacement done")
  })
}