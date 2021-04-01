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

anime.timeline({loop: true})
  .add({
    targets: '.namn__rubrik .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.namn__rubrik',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });