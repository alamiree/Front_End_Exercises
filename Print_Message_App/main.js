const addBtn = document.querySelector(".add");
const theInput = document.querySelector(".msg-input");
const messageCont = document.querySelector(".message-content");

addBtn.onclick = function(){
    if(theInput.value.length < 1){
        return false;
    }else{
        let paraElement = document.createElement("p");
        paraElement.appendChild((document.createTextNode(theInput.value)));
        messageCont.appendChild(paraElement);
        theInput.value = '';
    }
}