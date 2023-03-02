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

const Home = document.querySelector('.Home')
const Services = document.querySelector('.Services')
const Portfolio = document.querySelector('.Portfolio')
const About = document.querySelector('.About')
const Contact = document.querySelector('.Contact')

const sectionOne = document.querySelector('.sectionOne')
const sectionTwo = document.querySelector('.sectionTwo')
const sectionThree = document.querySelector('.sectionThree')
const sectionFour = document.querySelector('.sectionFour')
const sectionSix_contentTwo = document.querySelector('.sectionSix-contentTwo')
const lastSection = document.querySelector('.lastSection')

const homeSmall = document.querySelector('.homeSmall')
const servicesSmall = document.querySelector('.servicesSmall')
const portfolioSmall = document.querySelector('.portfolioSmall')
const aboutSmall = document.querySelector('.aboutSmall')
const contactSmall = document.querySelector('.contactSmall')

Home.addEventListener('click', function(){
    document.body.scrollIntoView()
}) 

homeSmall.addEventListener('click', function(){
    document.body.scrollIntoView()
})

Services.addEventListener('click', function(){
    sectionTwo.scrollIntoView()
})

servicesSmall.addEventListener('click', function(){
    sectionTwo.scrollIntoView()
})

Portfolio.addEventListener('click', function(){
    sectionThree.scrollIntoView()
})

portfolioSmall.addEventListener('click', function(){
    sectionThree.scrollIntoView()
})

About.addEventListener('click', function(){
    sectionFour.scrollIntoView()
})

aboutSmall.addEventListener('click', function(){
    sectionFour.scrollIntoView()
})

Contact.addEventListener('click', function(){
    lastSection.scrollIntoView()
})

contactSmall.addEventListener('click', function(){
    lastSection.scrollIntoView()+500
})

window.onscroll = function(){
    navMark() ; 
}

function navMark(){
    if(window.scrollY >= sectionOne.offsetTop){
        Home.classList.add('change')

        Home.classList.remove('change-hover')

        Services.classList.add('change-hover')
        Portfolio.classList.add('change-hover')
        About.classList.add('change-hover')
        Contact.classList.add('change-hover')
        
        Services.classList.remove('change')
        Portfolio.classList.remove('change')
        About.classList.remove('change')
        Contact.classList.remove('change')
    } if(window.scrollY >= sectionTwo.offsetTop){
        Services.classList.add('change')

        Home.classList.add('change-hover')

        Services.classList.remove('change-hover')

        Home.classList.remove('nav-list-active')
        Home.classList.remove('change')
        Portfolio.classList.remove('change')
        About.classList.remove('change')
        Contact.classList.remove('change')
    } if(window.scrollY >= sectionThree.offsetTop){
        Portfolio.classList.add('change')

        Services.classList.add('change-hover')

        Portfolio.classList.remove('change-hover')

        Home.classList.remove('change')
        Services.classList.remove('change')
        About.classList.remove('change')
        Contact.classList.remove('change')
    } if(window.scrollY >= sectionFour.offsetTop - 200) {
        About.classList.add('change')

        About.classList.remove('change-hover')

        Portfolio.classList.add('change-hover')

        Home.classList.remove('change')
        Services.classList.remove('change')
        Portfolio.classList.remove('change')
        Contact.classList.remove('change')
    } if(window.scrollY >= sectionSix_contentTwo.offsetTop){
        Contact.classList.add('change')

        Contact.classList.remove('change-hover')

        About.classList.add('change-hover')

        Home.classList.remove('change')
        Services.classList.remove('change')
        Portfolio.classList.remove('change')
        About.classList.remove('change')
    }
}