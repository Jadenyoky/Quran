document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".progress").style.visibility = "visible";
    } else {
        document.querySelector(".progress").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
}   

/*  */