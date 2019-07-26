let text = document.getElementById('text')
let button = document.getElementById('target')
let change = ()=>{
    text.innerText = 'Bye~'
}
button.addEventListener('click', change)