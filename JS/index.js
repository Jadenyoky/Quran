const icon_menu = document.querySelector('.icon-menu')
const nav_page_small = document.querySelector('.nav-page-small')
const highlight = document.querySelector('.highlight')

icon_menu.addEventListener('click', function(){
    nav_page_small.classList.toggle('nav-page-small-plus')
    nav_page_small.classList.add('trr')
    highlight.classList.toggle('ddd')
})

highlight.addEventListener('click', function(){
    nav_page_small.classList.remove('nav-page-small-plus')
    highlight.classList.remove('ddd')
})

const clickActiveNav = document.getElementsByClassName('clickActiveNav')

for(let x = 0 ; x < clickActiveNav.length ; x++){
    clickActiveNav[x].addEventListener('click', function(){
        let acting = document.getElementsByClassName('nav-list-active')
        acting[0].className = acting[0].className.replace(' nav-list-active')
        this.className += ' nav-list-active'
    })
}

const clickActiveNavSmall = document.getElementsByClassName('clickActiveNavSmall')

for(let n = 0 ; n < clickActiveNavSmall.length ; n++){
    clickActiveNavSmall[n].addEventListener('click', function(){
        let actingSmall = document.getElementsByClassName('nav-list-small-active')
        actingSmall[0].className = actingSmall[0].className.replace(' nav-list-small-active')
        this.className += ' nav-list-small-active'
    })
}

const clickActive = document.getElementsByClassName('clickActive')

for(let y = 0 ; y < clickActive.length ; y++){
    clickActive[y].addEventListener('click', function(){
        let act = document.getElementsByClassName('sectionThree-contentTwo-active')
        act[0].className = act[0].className.replace(' sectionThree-contentTwo-active' , '')
        this.className += ' sectionThree-contentTwo-active'
    })
}

