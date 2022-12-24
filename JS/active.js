const bu = document.querySelector('bu')
const bun = document.getElementsByClassName('bun')

for(let y = 0 ; y < bun.length ; y++){
    bun[y].addEventListener('click', function(){
        let act = document.getElementsByClassName("clickings") ;
        act[0].className = act[0].className.replace(" clickings", "") ;
        this.className += " clickings";
    })
}

$(function() {

    // optional: don't cache ajax to force the content to be fresh
    $.ajaxSetup({
      cache: false
    });
  
    // specify loading spinner
    //var spinner = "<img src='http://i.imgur.com/pKopwXp.gif' alt='loading...' />";

    var spinner = "<img src='../Beat.gif' alt='loading' />"
  
    // specify the server/url you want to load data from
    var url = "hello.html";
  
    // on click, load the data dynamically into the #result div
    addEventListener('load',function() {
      $("#result").html(spinner).load(url);
    });
  
  });