const eall1 = document.querySelector('.eall-one')
const menu2 = document.querySelector('.menu-t')
const mrr = document.querySelector('.menu-tt')

const one1 = document.querySelector('.one1')
const two2 = document.querySelector('.two2')
const three3 = document.querySelector('.three3')

const body = document.querySelector('body')

eall1.addEventListener('click', function(){
    one1.classList.toggle('one1-x')
    two2.classList.toggle('two2-x')
    three3.classList.toggle('three3-x')

    one1.classList.add('menu-x-ttw')

    two2.classList.add('menu-x-ttw')

    three3.classList.add('menu-x-ttw')

    menu2.classList.toggle('tww2')
    mrr.classList.add('tww3')
})

const eall2 = document.querySelector('.eall-two')
const menu1 = document.querySelector('.menu-o')

const one11 = document.querySelector('.one11')
const two22 = document.querySelector('.two22')
const three33 = document.querySelector('.three33')

eall2.addEventListener('click', function(){
    one11.classList.toggle('one1-xe')
    two22.classList.toggle('two2-xe')
    three33.classList.toggle('three3-xe')

    one11.classList.add('menu-xe-ttw')

    two22.classList.add('menu-xe-ttw')

    three33.classList.add('menu-xe-ttw')

    menu1.classList.toggle('tww')
})
