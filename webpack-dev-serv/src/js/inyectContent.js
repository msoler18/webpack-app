function inyectContent(){
  let content = `<div class="style-loader-wrapper">
    <h1>Hello from webpack and style-loader</h1>
  </div>`

  document.body.innerHTML = content
}

export default inyectContent;