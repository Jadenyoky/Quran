const btn_open = document.querySelector('.btn-open')
const image = document.querySelector('.image')
const highlight = document.querySelector('.highlight')
const body = document.querySelector('body')

const div = document.createElement('div')
document.body.appendChild(div)

$('.btn-open').on('click', function(){
    var request = new XMLHttpRequest() ;
    var url = 'code.html'

    request.onreadystatechange = function(){
        
        $.ajax({
            beforeSend: function(){
                //spin.classList.add('ref')
                image.style.display = 'block'
                highlight.style.display = 'block'
                body.style.overflow = 'hidden'
            } , 
            complete: function(){
                image.style.display = 'none'
                highlight.style.display = 'none'
                body.style.overflow = 'auto'
                $('.content').load(url)
                document.title = 'Open Page'
            } , 
        })

        if(this.status === 404 && this.readyState === 4){
            div.textContent = 'Not Found Yet :)'
        }

    }

    request.open('GET', url , true)
    request.send()
})

$('.btn-home').on('click', function(){
    var request = new XMLHttpRequest() ;
    var url = 'code2.html'

    request.onreadystatechange = function(){
        
        $.ajax({
            beforeSend: function(){
                //spin.classList.add('ref')
                image.style.display = 'block'
                highlight.style.display = 'block'
                body.style.overflow = 'hidden'
                document.title = 'Loading ...'

            } , 
            complete: function(){
                image.style.display = 'none'
                highlight.style.display = 'none'
                body.style.overflow = 'auto'
                $('.content').load(url)
                document.title = 'Home Page'
            } , 
        })

        if(this.status === 404 && this.readyState === 4){
            div.textContent = 'Not Found Yet :)'
        }

    }

    request.open('GET', url , false)
    request.send()
})
