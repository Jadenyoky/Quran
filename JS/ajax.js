const body = document.querySelector('body')
const line = document.querySelector('.line')
const btn_home = document.querySelector('.btn-home')
const btn_open = document.querySelector('.btn-open')
const lineOne = document.querySelector('.lineOne')

const div = document.createElement('div')
document.body.appendChild(div)

$('.btn-open').on('click', function(){
    var request = new XMLHttpRequest() ;
    var url = 'code.html'

    request.onreadystatechange = function(){
        
        $.ajax({
            beforeSend: function(){
                body.style.overflow = 'hidden'
                document.title = 'Loading ...'
                $('.line').fadeIn(0)
                line.style.width = '20%'
                line.style.backgroundColor = 'coral'
            } , 
            complete: function(){
                body.style.overflow = 'auto'
                $('.content').load(url)
                document.title = 'Open Page'
                line.style.width = '100%'
                setTimeout(() => {
                    $('.line').fadeOut('fast')
                }, 400);
            } , 
        })

        if(this.status === 404 && this.readyState === 4){
            div.textContent = 'Not Found Yet :)'
        }

    }

    btn_open.classList.add('activeOne')
    btn_home.classList.remove('activeTwo')

    lineOne.style.backgroundColor = 'coral'

    request.open('GET', url , true)
    request.send()
})

$('.btn-home').on('click', function(){
    var request = new XMLHttpRequest() ;
    var url = 'code2.html'

    request.onreadystatechange = function(){
        
        $.ajax({
            beforeSend: function(){
                body.style.overflow = 'hidden'
                document.title = 'Loading ...'
                $('.line').fadeIn(0)
                line.style.width = '20%'
                line.style.backgroundColor = 'green'
            } ,
            complete: function(){
                body.style.overflow = 'auto'
                $('.content').load(url)
                document.title = 'Home Page'
                line.style.width = '100%'
                setTimeout(() => {
                    $('.line').fadeOut('fast')
                }, 400);
            } , 
        })


        if(this.status === 404 && this.readyState === 4){
            div.textContent = 'Not Found Yet :)'
        }

    }

    btn_home.classList.add('activeTwo')
    btn_open.classList.remove('activeOne')
    lineOne.style.backgroundColor = 'green'

    request.open('GET', url , false)
    request.send()
})
