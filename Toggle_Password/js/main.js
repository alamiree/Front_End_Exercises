let showBtn = document.querySelector(".show");
let thePassInput = document.querySelector("#password");

let placeholderStatus = true;

showBtn.onclick = function(){
    if(placeholderStatus == true){
        thePassInput.setAttribute("type", "text");
        placeholderStatus = false;
    }else{
        thePassInput.setAttribute("type", "password");
        placeholderStatus = true;
    }
    console.log(placeholderStatus);
    console.log("Clicked")
}