const visible = document.querySelector('.hh3')
const hh = document.querySelector('.hh2')
const hh5 = document.querySelector('.hhh')
const hh6 = document.querySelector('.hh6')
const hh7 = document.querySelector('.header2')
const hhhh4 = document.querySelector('.hhhh4')
const hhhh1 = document.querySelector('.hhhh1')
const test = document.querySelector('.test')
const llll5 = document.querySelector('.llll5')
const bodier = document.querySelector('.bodier')


visible.addEventListener('click', function(){
    hh.classList.toggle('hh10')
    hh5.classList.toggle('hh4')

    hh7.classList.remove('kkkk')
    hhhh1.classList.remove('hhhh2')
    test.classList.remove('test1')

})

hh6.addEventListener('click', function(){
    hh7.classList.toggle('kkkk')

    hh.classList.remove('hh10')
    hh5.classList.remove('hh4')
    hhhh1.classList.remove('hhhh2')
    test.classList.remove('test1')
})

hhhh4.addEventListener('click', function(){
    hhhh1.classList.toggle('hhhh2')

    hh7.classList.remove('kkkk')
    hh.classList.remove('hh10')
    hh5.classList.remove('hh4')
    test.classList.remove('test1')
})

llll5.addEventListener('click', function(){
    test.classList.toggle('test1')

    hhhh1.classList.remove('hhhh2')
    hh7.classList.remove('kkkk')
    hh.classList.remove('hh10')
    hh5.classList.remove('hh4')
})

