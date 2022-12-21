document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
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
