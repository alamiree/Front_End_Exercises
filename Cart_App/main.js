/* let allLiList = document.querySelectorAll(".list li");
let contentElement = document.getElementById("content");
let items = [];

allLiList.forEach(item => {
    item.onclick = function(){
        if(!items.includes(item.textContent)){
            contentElement.innerHTML += item.textContent + " ";
        }
        items = [...items, item.textContent];
        console.log(items)
    }
})
console.log(contentElement.textContent.length) */

let ourData = [];

fetch("https://api.github.com/users/elzerowebschool/repos").then(response => response.json()).then(data => {
    console.log(typeof data);
})

const names = ["Hass", "Ali", "Osama", "Ahmed"];

let filteredName = names.filter((ele, index) => ele !== "Hass");
console.log(filteredName)
