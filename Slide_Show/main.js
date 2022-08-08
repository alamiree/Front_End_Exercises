let theImageElement = document.querySelector(".image");
const theImagesArray = ["images/1.jpg", "images/2.png", "images/3.jpg", "images/4.jpg"];
let i = 0;
function slideShow(){
    theImageElement.setAttribute("src", theImagesArray[i]);
    if(i == theImagesArray.length - 1){
        i = 0;
    }else{
        i++;
    }
    setTimeout(function(){
        slideShow()
    }, 1000);
}

slideShow();

