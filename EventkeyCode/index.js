const text = document.getElementById("text")
const textbox = document.getElementById("textBox")


window.addEventListener('keydown', function(e){
    const a =e.key
    //console.log(a)
    const value = e.keyCode
    //console.log(value)
    const codeData = e.code
    console.log(codeData)
    getkeycode(a ,value,codeData)
})
 function getkeycode(a ,value,codeData){
    textbox.style.display = 'block'
    let element = `
    <h1>${a}</h1>
    <h1>${value}</h1>
    <h1>${codeData}</h1>
    `
    textbox.innerHTML = element
 }
