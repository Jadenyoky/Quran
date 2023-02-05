const progr = document.querySelector('.progresss')
const percents = document.querySelector('.perc')
const percents0 = document.querySelector('.perc0')
const icon_page0 = document.querySelector('.icon-page0')

function scrollPercent0() {
    let sctop = document.body.scrollTop || document.documentElement.scrollTop
    let scheight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scall = (sctop / scheight) * 100

    progr.style.width = scall+'%'
    percents.innerHTML = scall.toFixed()+'%'

    icon_page0.style.rotate = scall+'0deg'
    

    // console.log(scall.toFixed()+'%')

    if(scall > 48.5){
        percents0.style.cssText="background-color: black ; color: white ; transition: 1s"
    } else {
        percents0.style.cssText="background-color: aqua ; color: black ; transition: 1s"
    }
}

// ----- //

const prog_two = document.querySelector('.prog-two')
const prog_two_content = document.querySelector('.prog-two-content')

const prog_three = document.querySelector('.prog-three')
const prog_three_content = document.querySelector('.prog-three-content')

function scrollPercent01() {
    let progTop = document.body.scrollTop || document.documentElement.scrollTop
    let progHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let progAll = (progTop / progHeight) * 100

    prog_two.style.background = `conic-gradient(#0069aa ${progAll}% , #c0cfd8 ${progAll}%)`

    prog_three.style.background = `conic-gradient(#0069aa ${progAll}% , #c0cfd8 ${progAll}%)`
}

// ----- //

function scrollOption() {
    if(window.scrollY > 1){
        prog_two.classList.add('klkl')
        prog_three.classList.remove('klkl2')
    } if(window.scrollY === 0){
        prog_two.classList.remove('klkl')
    } if(window.scrollY > 500) {
        prog_three.classList.add('klkl2')
        prog_two.classList.remove('klkl')
    }
}

// ----- //

window.onscroll = function() { scrollPercent0() ; scrollPercent01() ; scrollOption() ; }

// ----- //

const endd = document.querySelector('.enddd')

prog_two.addEventListener('click', function(){
    endd.scrollIntoView()
})

prog_three.addEventListener('click', function(){
    document.documentElement.scrollTop = 0
})

// ----- //

let counterStartingX , counterStartingY , counterMovingX , counterMovingY ;

function touchStarting(lala){
    counterStartingX = lala.touches[0].clientX
    counterStartingY = lala.touches[0].clientY
    
    
    console.log(counterStartingX)
}


function touchMoving(lala){
    counterMovingX = lala.touches[0].clientX
    counterMovingY = lala.touches[0].clientY

    cont.classList.add('ttt')

    cont.style.transform = `translateX(${counterMovingX-110}%)`

    console.log(`right ${counterMovingX}`)

    if(counterMovingX >= 100){
        cont.style.transform = `translateX(0)`
    } 
}

const cont = document.querySelector('.cont')


function touchEnding(){

   if (counterMovingX >= 50){
        cont.style.transform = `translateX(0)`
   } else if (counterMovingX <= 49) {
        cont.style.transform = `translateX(-110%)`
   } 

}

