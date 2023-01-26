const eall = document.querySelector('.eall-two')
const menu1 = document.querySelector('.menu-o')

eall.addEventListener('click', function(){
    menu1.classList.toggle('tww')
})

const eall1 = document.querySelector('.eall-one')
const menu2 = document.querySelector('.menu-t')
const body = document.querySelector('body')

eall1.addEventListener('click', function(){
    menu2.classList.toggle('tww2')
    body.classList.toggle('body-plus')
})