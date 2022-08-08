let createBtn = document.querySelector("#btn");
let rowsElement = document.querySelector("#rows");
let colsElement = document.querySelector("#cols");
let tableContent = document.querySelector(".table-content");

createBtn.addEventListener("click", createTable);


function createTable(){
    tableContent.innerHTML = "";

    let numberOfRows = rowsElement.value;
    let numberOfCols = colsElement.value;

    tableContent.style.display = "table";

    for(let i = 0; i < numberOfRows; i++){
        let trElement = document.createElement("tr");

        for(let j = 0; j < numberOfCols; j++){
            let tdElement = document.createElement("td");
            tdElement.appendChild(document.createTextNode("td item"));
            trElement.appendChild(tdElement);
        }

        tableContent.appendChild(trElement);
    }

    rowsElement.value = ""
    colsElement.value = ""
}
