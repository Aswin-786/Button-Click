let a = 1
let b = 1
let c = 1
const BlueDiv= document.getElementById('Blue')
BlueDiv.onclick = () => {
  BlueDiv.innerText=a++
  }
const GreenDiv = document.getElementById('Green')
GreenDiv.onclick = () => {
  GreenDiv.innerText = b++
  }
const RedDiv = document.getElementById('Red')
RedDiv.onclick = () => {
  RedDiv.innerText = c++
}
const clearDiv = document.getElementById('Clear')
clearDiv.onclick = () => {
  a = 1
  b = 1
  c = 1
  BlueDiv.innerText = 'Blue'
  GreenDiv.innerText = 'Green'
  RedDiv.innerText = 'Red'
}