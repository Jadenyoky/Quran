const nav = document.getElementsByClassName('nav1')

for (let n = 0; n < nav.length; n++) {
    nav[n].addEventListener('click', function move() {
        let act = document.getElementsByClassName('activitor')
        act[0].className = act[0].className.replace(' activitor')
        this.className += ' activitor' ;
    })
}

const nav01 = document.querySelector('.nav01')
const nav02 = document.querySelector('.nav02')
const nav03 = document.querySelector('.nav03')
const nav04 = document.querySelector('.nav04')
const nav05 = document.querySelector('.nav05')

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')

nav01.addEventListener('click', function(){
    one.classList.add('moving1')

    two.classList.remove('moving2')
    three.classList.remove('moving3')
    four.classList.remove('moving4')
    five.classList.remove('moving5')
}) 

nav02.addEventListener('click', function(){
    two.classList.add('moving2')

    one.classList.remove('moving1')
    three.classList.remove('moving3')
    four.classList.remove('moving4')
    five.classList.remove('moving5')
})

nav03.addEventListener('click', function(){
    three.classList.add('moving3')
    
    one.classList.remove('moving1')
    two.classList.remove('moving2')
    four.classList.remove('moving4')
    five.classList.remove('moving5')
})

nav04.addEventListener('click', function(){
    four.classList.add('moving4')
    
    one.classList.remove('moving1')
    two.classList.remove('moving2')
    three.classList.remove('moving3')
    five.classList.remove('moving5')
})

nav05.addEventListener('click', function(){
    five.classList.add('moving5')

    one.classList.remove('moving1')
    two.classList.remove('moving2')
    three.classList.remove('moving3')
    four.classList.remove('moving4')
})

const nav0 = document.querySelector('.nav0')
const nav00 = document.querySelector('.nav00')
const hello = document.querySelector('.hello')
const hii = document.querySelector('.hii')
const kkk = document.querySelector('.kkk')
const vid = document.querySelector('.vid')
const over = document.querySelector('.over')
const top1 = document.querySelector('.top')
const top0 = document.querySelector('.top0')
const body = document.querySelector('body')
const over1 = document.querySelector('.over1')
const prog = document.querySelector('.prog00')
const prog0 = document.querySelector('.prog0')
const percent = document.querySelector('.percent')

window.onscroll = function() { progressPage() ; scrollingNav() ; }

function progressPage() {
    let scrollT = document.body.scrollTop || document.documentElement.scrollTop
    let scrollH = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrollA = (scrollT / scrollH) * 100 
    prog.style.width= scrollA + '%'
    percent.innerHTML = scrollA.toFixed() + '%'
}

function scrollingNav(){
    if(window.scrollY > 0){
        prog.classList.add('prog01')
        prog0.classList.add('prog02')
        percent.classList.add('percent0')
    } if(window.scrollY >= nav00.offsetTop){
        percent.classList.add('add')
    } if(window.scrollY < nav00.offsetTop){
        percent.classList.remove('add')
    } if(window.scrollY >= top1.offsetTop){
        top1.classList.add('top1')
        top0.classList.remove('top01')
    } if(window.scrollY < top1.offsetTop){
        top1.classList.remove('top1')
        top0.classList.add('top01')
    } if(window.scrollY === 0){
        top0.classList.remove('top01')
        prog.classList.remove('prog01')
        prog0.classList.remove('prog02')
        percent.classList.remove('percent0')
    }
}

top1.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
})

const bo = document.querySelector('.bo')

top0.addEventListener('click', function(){
    bo.scrollIntoView()
})