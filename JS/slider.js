new Splide('#one1', {
  perPage: 1 ,
}).mount()

new Splide('#two2', {
  perPage: 2 ,
}).mount()

new Splide('#three3', {
  perPage: 3 ,
}).mount()

new Splide('#four4', {
  perPage: 4 ,
}).mount()

new Splide('#five5', {
  perPage: 5 ,
}).mount()

const changer = document.querySelector('.changer')
const iall = document.querySelector('.fa-minus')
const ione = document.querySelector('.ione')
const itwo = document.querySelector('.itwo')
const ithree = document.querySelector('.ithree')

const one1 = document.querySelector('.eee')

changer.addEventListener('click', function(){
    ione.classList.toggle('ione-plus')
    ithree.classList.toggle('ithree-plus')
    setTimeout(() => {
    itwo.classList.toggle('itwo-x')
    ione.classList.toggle('ione-x')
    ithree.classList.toggle('ithree-x')
    }, 100);
    one1.classList.toggle('eee1')
})

changer.addEventListener('mouseover', function(){
  
})