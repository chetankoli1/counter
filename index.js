let count = 0;

let inc = document.getElementById('inc')
let dnc = document.getElementById('dnc')
let reset = document.getElementById('reset')
let textId = document.getElementById('heading')

let move = document.querySelector('.move')
let first = document.querySelector('.one')
let second = document.querySelector('.two')
let thrid = document.querySelector('.three')
let four = document.querySelector('.four')

let input = document.querySelector('input')

input.onclick = function btnClick(event){
    console.log(event.target.value)
    event.target.value = "chetan"
    event.target.style.backgroundColor = 'yellow';
}

function incHandler(){
    count = count +1
    textId.textContent = count
}

function dncHandler(){
    count = count-1
    textId.textContent = count
}

function resetHandler(){
    count = 0
    textId.textContent = count
}

function mouseMoveHadler() {
    first.textContent = event.screenX
    second.innerText = event.screenY
    thrid.innerText = event.clientX
    four.innerText = event.clientY

}

inc.addEventListener('click',incHandler)
dnc.addEventListener('click',dncHandler)
reset.addEventListener('click',resetHandler)
move.addEventListener('mousemove', mouseMoveHadler)