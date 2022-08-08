let fontOption = document.getElementById("fonts");
let articlePara = document.querySelector(".para");
let fontSize = document.querySelector(".fontSize");
let changeBackgroundColor = false;


fontOption.onchange = function(){
    articlePara.style.fontFamily = this.value;
}

document.addEventListener("click", function(e){
    if(e.target.classList.contains("changeBg")){
        changeBackgroundColor = !changeBackgroundColor
        if(changeBackgroundColor == true){
            articlePara.style.cssText = "background-color: #000; color: #fff"
        }else{
            articlePara.style.cssText = "background-color: #fff; color: #000"
        }      
    }

    if(e.target.classList.contains("plus")){
        fontSize.textContent = parseInt(fontSize.textContent) + 1
        if(fontSize.textContent == 22){
            e.target.classList.add("disabled")
        }
        articlePara.style.fontSize = fontSize.textContent + 'px';
    }
    if(e.target.classList.contains("minus")){
        fontSize.textContent = parseInt(fontSize.textContent) - 1
        if(fontSize.textContent < 17){
            e.target.classList.add("disabled")
        }
        articlePara.style.fontSize = fontSize.textContent + 'px';
    }
})

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let myUnquieSortedArray = [...new Set(myFriends)].sort()
console.log(myUnquieSortedArray)