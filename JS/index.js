document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".progress1").style.visibility = "visible";
        document.querySelector(".spinner").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.querySelector(".progress1").style.display = "none";
            document.querySelector(".spinner").style.display = "none";
            document.querySelector("body").style.visibility = "visible";
        }, 900);
    }
} 


const bun = document.getElementsByClassName('nav-hover')

for( let u = 0 ; u < bun.length ; u++){
    bun[u].addEventListener('click', function(){
        let act = document.getElementsByClassName('activing')
        act[0].className = act[0].className.replace(' activing','')
        this.className += ' activing'
    })
} 


const bu = document.querySelector('bu')
const bun1 = document.getElementsByClassName('bun')

for(let y = 0 ; y < bun1.length ; y++){
    bun1[y].addEventListener('click', function(){
        let act = document.getElementsByClassName("cliks") ;
        act[0].className = act[0].className.replace(" cliks", "") ;
        this.className += " cliks";
    })
}