const iall = document.querySelector('.iall')
const ione = document.querySelector('.ione')
const itwo = document.querySelector('.itwo')
const ithree = document.querySelector('.ithree')
const nall = document.querySelector('.nall')
const call = document.querySelector('.call')
const ihead = document.querySelector('.ihead')

iall.addEventListener('click', function(){
    ione.classList.toggle('ione-t')
    itwo.classList.toggle('itwo-t')
    ithree.classList.toggle('ithree-t')
    setTimeout(() => {
        ione.classList.toggle('ione-x')
        itwo.classList.toggle('itwo-x')
        ithree.classList.toggle('ithree-x')
        nall.classList.toggle('nall-t')
        call.classList.toggle('call-t')
        ihead.classList.toggle('ihead-t')
    }, 200);
})
