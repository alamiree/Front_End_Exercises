let addBtn = document.querySelector("#add");
let input = document.querySelector("#name");
let tasksCont = document.querySelector(".tasks");

let arrayOfTasks = localStorage.getItem("Tasks") ? JSON.parse(localStorage.getItem("Tasks")) : [];

getDataFromLocalStorage();

addBtn.onclick = function(e){
    e.preventDefault();
    if(input.value){
        addTaskToArray(input.value);
        input.value = "";
    }else{
        alert("Please Enter name")
    }
}


//Delete Task
document.addEventListener("click", function(e){
    if(e.target.classList.contains("del-task")){
        let taskID = e.target.parentElement.dataset.id;
        e.target.parentElement.remove();
        deleteTask(taskID)
        console.log(arrayOfTasks)
    }
    if(e.target.classList.contains("task-text")){
        let taskID = e.target.parentElement.dataset.id;
        toggleTaskState(taskID);
        e.target.classList.toggle('done');
    }
})

//Add Task into the Tasks Array
function addTaskToArray(taskVal){
    const taskObj = {
        id: arrayOfTasks.length + 1,
        name: taskVal,
        isCompleted: false
    };
    arrayOfTasks.push(taskObj);
    addElementsToPageFrom(arrayOfTasks)
    addTaskToLocalStorage(arrayOfTasks)
}

//Show Tasks and append it into the Tasks div
function addElementsToPageFrom(arrayOfTasks){
    tasksCont.innerHTML = "";
    if(arrayOfTasks.length){
        arrayOfTasks.forEach(task => {
            let taskDiv = document.createElement('div');
            taskDiv.className = "task";
            taskDiv.dataset.id = task.id;
            
            let taskText = document.createElement('span');
            taskText.className = 'task-text';
            if(task.isCompleted){
                taskText.className = 'task-text done';
            }
            taskText.appendChild(document.createTextNode(task.name));
            taskDiv.appendChild(taskText);
            
            let deleteBtnElement = document.createElement('button');
            deleteBtnElement.className = 'del-task';
            deleteBtnElement.appendChild(document.createTextNode('Delete'));
            taskDiv.appendChild(deleteBtnElement);
    
            tasksCont.appendChild(taskDiv);
        });
    }
}

function addTaskToLocalStorage(arrayOfTasks){
    localStorage.setItem("Tasks", JSON.stringify(arrayOfTasks));
}

//delete function
function deleteTask(id){
    arrayOfTasks = arrayOfTasks.filter(filteredTask => filteredTask.id != id);
    addTaskToLocalStorage(arrayOfTasks)
}

//get data from local storage
function getDataFromLocalStorage(){
    let data = localStorage.getItem("Tasks");
    if(data){
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks)
    }
}

//Toggle Task state
function toggleTaskState(id){
    for(let i = 0; i < arrayOfTasks.length; i++){
        if(arrayOfTasks[i].id == id){
            arrayOfTasks[i].isCompleted == false ? (arrayOfTasks[i].isCompleted = true) : (arrayOfTasks[i].isCompleted = false);
        }
    }
    addTaskToLocalStorage(arrayOfTasks)
}