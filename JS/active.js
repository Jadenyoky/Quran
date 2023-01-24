const bun = document.getElementsByClassName('bun')

for(let y = 0 ; y < bun.length ; y++){
    bun[y].addEventListener('click', function(){
        let act = document.getElementsByClassName("clickings") ;
        act[0].className = act[0].className.replace(" clickings", "") ;
        this.className += " clickings";
    })
}