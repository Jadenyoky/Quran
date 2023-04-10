
/* const btn = document.querySelector('.btn-click')
const lineTop = document.querySelector('.lineTop')

btn.addEventListener('click', function(){
    const req = new XMLHttpRequest()
    const url = "code.html"

    req.onreadystatechange = function() {
        if(this.readyState == 1){
            lineTop.style.width = '20%'
            $('.lineTop').fadeIn(0)
            lineTop.style.backgroundColor = 'aqua'
        } else if(this.readyState == 4 && this.status == 200){
            console.log('the page Found')
            lineTop.style.width = '100%'
            $('.lineTop').fadeOut(400)
            $('.content').load(url)
        } else if(this.status == 404){
            lineTop.style.width = '100%'
            lineTop.style.backgroundColor = 'red'
        }
    }

    req.open('GET' , url , true)
    req.send()
}) */