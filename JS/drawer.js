const all_menu = document.querySelector('.all-menu')

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')

const menu2 = document.querySelector('.menu2')

const mini_menu = document.querySelector('.mini-menu')

all_menu.classList.add('trr0')

mini_menu.addEventListener('click', function(){
    
    one.classList.toggle('plus3')
    two.classList.toggle('plus4')

    five.classList.toggle('plus5')
    six.classList.toggle('plus6')

    three.classList.toggle('plus1')
    four.classList.toggle('plus2')

    lll.classList.toggle('lll0')
    lll.classList.add('trr0')

})

const lll = document.querySelector('.lll')

lll.addEventListener('click', function(){
    three.classList.remove('plus1')
    four.classList.remove('plus2')
    
    one.classList.remove('plus3')
    two.classList.remove('plus4')

    five.classList.remove('plus5')
    six.classList.remove('plus6')

    lll.classList.remove('lll0')

})


let kkk = window.scrollY

window.onscroll = function(){
    hideToScroll() ;
}


function hideToScroll(){
    if(kkk < window.scrollY && window.scrollY > innerHeight){
        
        menu2.classList.add('fade0')
        menu2.classList.add('trr')
        menu2.innerHTML = 'It\'s hidding'

    } else {

        menu2.classList.remove('fade0')
        menu2.innerHTML = 'It\'s Showing'

    }

    lll.innerHTML = `ScrollY = ${window.scrollY} .. ${kkk} <br> innerHeight = ${window.innerHeight} <br> if ScrollY > innerHeight = Hidding <br> if ScrollY < innerHeight = Showing <br> if ScrollY - 1 = Showing <br> if ScrollY + 1 = Hidding <br> :)`

    kkk = window.scrollY

    console.log(kkk)
    console.log(window.scrollY)
}

/* window.addEventListener('scroll', () => {
    if(kkk < window.scrollY){
        console.log('eleven')
    } else {
        console.log('elevenFails')
    }

    kkk = window.scrollY
}) */
