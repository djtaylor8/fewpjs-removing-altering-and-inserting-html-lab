// Write your code here!
document.querySelector('#main').remove()

let element = document.createElement('div')

document.body.appendChild(element)

let newHeader = document.createElement('h1')

newHeader.id = "victory" 

newHeader.innerHTML = "DJ is the champion"