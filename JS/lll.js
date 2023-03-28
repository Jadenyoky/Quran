window.addEventListener('DOMContentLoaded', function(){
    $.ajaxSetup({
        cache: false
      });

    // var loading = "<img src='lll.gif' />";
    const loading = document.querySelector('.plus')

    var url = "code.html";

    $(document.body).html(loading).load(url);

})