$( function() {
    $( document ).tooltip();
} );

const iconRows = document.querySelector('.iconRows')
const iconColumns = document.querySelector('.iconColumns')

const content = document.querySelector('.content')

iconRows.addEventListener('click', function(){
    content.classList.add('rows')
    content.classList.remove('columns')
})

iconColumns.addEventListener('click', function(){
    content.classList.add('columns')
    content.classList.remove('rows')
})

const theme = document.querySelector('.theme')
const themeTwo = document.querySelector('.themeTwo')

const header = document.querySelector('.header')
const line = document.querySelector('.line')

const color = document.querySelector('.color')
const colorTwo = document.querySelector('.colorTwo')

const allContent = document.querySelector('.allContent')


theme.addEventListener('click', function(){
    header.classList.add('header-plus')
    iconRows.classList.add('icon-plus')
    iconColumns.classList.add('icon-plus')
    line.classList.add('line-plus')
    color.classList.add('color-plus')
    allContent.classList.add('allContent-plus')
    colorTwo.classList.add('colorTwo-plus')
    $('.theme').fadeOut('fast')
    $('.themeTwo').fadeIn('fast')
})

themeTwo.addEventListener('click', function(){
    header.classList.remove('header-plus')
    iconRows.classList.remove('icon-plus')
    iconColumns.classList.remove('icon-plus')
    line.classList.remove('line-plus')
    color.classList.remove('color-plus')
    allContent.classList.remove('allContent-plus')
    colorTwo.classList.remove('colorTwo-plus')
    $('.theme').fadeIn('fast')
    $('.themeTwo').fadeOut('fast')
})