const plus = document.querySelector('.plus')
const mplus = document.querySelector('.mplus')
const num = document.querySelector('.number')
const update = document.querySelector('.update')
let mun = 0 ;
num.innerHTML = mun ;
update.innerHTML = "The number is ( " + mun + " ) ." ;

plus.addEventListener('click', function(){
    
    plus.className += " unclick" ;
    mplus.classList.remove('unclick')
    
    if(mun >= 0 && mun < 1000 ) {
        mun += 50 ;
        num.style.cssText="font-size: 45px ; width: 140px ; height: 70px ; background-color: cyan; color: coral ; border: 4px solid coral ;";
    } else if(mun >= 1000 && mun < 10000 ) {
        mun += 100;
        num.style.cssText="font-size: 50px ; width: 170px ; height: 100px ; background-color: coral ; color: cyan ; border: 10px solid cyan;"
    } else if(mun >= 10000 && mun < 50000 ) {
        mun += 250 ;
        num.style.cssText="font-size: 55px ; width: 220px ; height: 150px ; background-color: purple ; color: yellow ; border: 15px solid yellow;"
    } else if(mun >= 50000 && mun < 100000 ) { 
        mun += 500;
        num.style.cssText="font-size: 60px ; width: 270px ; height: 200px ; background-color: red ; color: white ; border: 20px solid white;"
    } else if(mun >= 100000 ) { 
        mun += 1000;
        num.style.cssText="font-size: 65px ; width: 330px ; height: 210px ; background-color: green ; color: white ; border: 20px solid white;"
    } else {
        num.style.cssText="font-size: 40px ; width: 100px ; height: 50px ; background-color: coral; color: white ; border: 1px solid white ;"
    }

    num.innerHTML = mun ;
    update.innerHTML = "The number is ( " + mun + " ) ." ;
    console.log(mun)
})

mplus.addEventListener('click', function(){

    mplus.className += " unclick" ;
    plus.classList.remove('unclick')
    
    if(mun >= 50 && mun <= 1000 ) {
        mun -= 50  ;
        num.style.cssText="font-size: 45px ; width: 140px ; height: 70px ; background-color: cyan; color: coral ; border: 4px solid coral ;";
    } else if(mun > 1000 && mun <= 10000) {
        mun -= 100 ;
        num.style.cssText="font-size: 50px ; width: 170px ; height: 100px ; background-color: coral ; color: cyan ; border: 10px solid cyan;"
    } else if(mun > 10000 && mun <= 50000) {
        mun -= 250 ;
        num.style.cssText="font-size: 55px ; width: 220px ; height: 150px ; background-color: purple ; color: yellow ; border: 15px solid yellow;"
    } else if(mun > 50000 && mun <= 100000){
        mun -= 500 ;
        num.style.cssText="font-size: 60px ; width: 270px ; height: 200px ; background-color: red ; color: white ; border: 20px solid white;"
    } else if(mun >= 100000 ) { 
        mun -= 1000;
        num.style.cssText="font-size: 65px ; width: 330px ; height: 210px ; background-color: green ; color: white ; border: 20px solid white;"
    } else {
        num.style.cssText="font-size: 40px ; width: 100px ; height: 50px ; background-color: coral; color: white ; border: 1px solid white ;"
    }

    num.innerHTML = mun ;
    update.innerHTML = "The number is ( " + mun + " ) ." ;
    console.log(mun)
})