'use strict'

let van = document.getElementById('nav')
let x = document.getElementById('x')

//console.log(nav, x);

x.addEventListener('click', function(){
    nav.classList.toggle('open')
})

document.addEventListener('keydown', function(event){
    if(event.key === "Escape" && nav.classList.contains('open')){
        nav.classList.toggle('open')
    }
})
