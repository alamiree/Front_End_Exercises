const menuIcon = document.querySelector(".menu");
const allSpans = document.querySelector(".menu span");
const firstSpan = document.querySelector(".first");
const secondSpan = document.querySelector(".second");
const thirdSpan = document.querySelector(".third");

menuStatus = false;
menuIcon.onclick = function(){
    if(menuStatus == false){
        allSpans.style.marginBottom = 0;
        firstSpan.classList.add("turn-left");
        secondSpan.classList.add("hide");
        thirdSpan.classList.add("turn-right");
        menuStatus = true;
    }else{
        allSpans.style.marginBottom = "5px";
        firstSpan.classList.remove("turn-left");
        secondSpan.classList.remove("hide");
        thirdSpan.classList.remove("turn-right");
        menuStatus = false;
    }
}