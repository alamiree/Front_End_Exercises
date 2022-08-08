const changeBtn = document.querySelector(".changeBtn");
const myDiv = document.querySelector(".myDiv");
const theColorsArray = ['red', 'green', 'blue'];
let i = 0;
myDiv.style.backgroundColor = theColorsArray[i];

changeBtn.onclick = function(){
    i++;
    if(i > 2){
        i = 0;
    }
    myDiv.style.backgroundColor = theColorsArray[i];
}