/* function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let flag = "AM"

    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        flag = "PM";
        hours = hours - 12;
    }
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    if(seconds < 10){
        seconds = `0${seconds}`;
    }
    document.querySelector(".clock").innerHTML = `${hours}:${minutes}:${seconds} ${flag}`
    setTimeout(() => {
        clock();
    }, 1000)
}

clock()
 */
/* const names = ["Ali", "Osama", "Hass", "Ahmed"];
const numbers = [9, 5, 3, 4, 7, 9];

// reverse Array
Array.prototype.myReverse = function(arr){
    let reverseArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reverseArr.push(arr[i])
    }
    console.log(reverseArr)
}

// Find the max number
Array.prototype.findMax = function(arr){
    let maxNum = arr.reduce((curr, acc) => {
        if(curr > acc){
            return curr
        }else{
            return acc
        }
    })
    console.log(maxNum); */
//}

// find index function
/* Array.prototype.myFindIndex = function(myArray, value){
    let index;
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] === value){
            index = i;
        }
    }
    return Number(index)
}

let myIndex = Array.prototype.myFindIndex(names, "Osama")
console.log(typeof(myIndex) !== Number) */

/* String.prototype.myRepeat = function(text, count){
    let result = "";
    for(let i = 0; i < count; i++){
        result += `${text}`;
    }
    console.log(result);
}

String.prototype.myRepeat("Hello", 5); */

/* 
    -- stringLength function: gets the length of a string
    -- it takes one parameter (text);
    -- it uses the spread opeator to convert the string to an array
    -- loop through the array and for each loop, the count increases by 1

*/
String.prototype.stringLength = function (texts){
    let lettersAarr = [...texts];
    let count = 0;
    for (let letter of lettersAarr){
        count++;
    }
    return count;
}
String.prototype.stringLength("Hello hass");


/* 
    -- stringSlice function: extracts a part of a string and return the extracted part
    -- it takes three parameters: text, start position and end position
    -- it uses the spread opeator to convert the string to an array
*/
String.prototype.stringSlice = function(text, startPos, endPos){
    const myArrayOfLetters = [...text];
    let i = startPos;
    let slicedtext = "";
    while(i < endPos){
        slicedtext += myArrayOfLetters[i];
        i++;
    }
    return slicedtext;
}

String.prototype.stringSlice("elzero web school", 0, 6);


/* 
    -- stringReplace function: method replaces a specified value with another value in a string

*/

String.prototype.myReverse = function(str){
    let reverseStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}

String.prototype.myReverse("elzero web school");


String.prototype.myTrim = function(str){
    let trimStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            continue;
        }else{
            trimStr += str[i];
        }
    }
    return trimStr;
}

String.prototype.myTrim("            Elzero  ");


function toLowerCase(str){
    let lowerCaseStr = "";
    for(let i = 0; i < str.length; i++){
        const ascii = str[i].charCodeAt();
        if(ascii >= 65 && ascii <= 90){
            lowerCaseStr += String.fromCharCode(ascii + 32);
        }else{
            lowerCaseStr += str[i];
        }
    }
    return lowerCaseStr;
}
toLowerCase("eLzeRo");

function customCapitlize(text){
    const ascii = text[0].charCodeAt();
    let capitilizedLetter = "";
    if(ascii >= 97 && ascii <= 122){
        capitilizedLetter = String.fromCharCode(ascii - 32);
    }else{
        capitilizedLetter = String.fromCharCode(ascii);
    }
    let capResult = capitilizedLetter;
    for(let i = 0; i < text.length; i++){
        if((i + 1) == text.length){
            break
        }else{
            capResult += text[i + 1];
        }
    }
    return capResult;
}


/* console.log(customCapitlize("elzero"))
console.log(customCapitlize("Web"))
console.log(customCapitlize("school")) */

function customInclude(text, word, startPos = 0){
    let myArr = text.split(" ");
    let result = false;
    for(let i = startPos; i < myArr.length; i++){
        console.log(myArr[i])
        if(myArr[i] === word){
            result = true;
        }
    }
    return result;
}


/* async function fetchData(url){
    try{
        let response = await fetch(url);
        let data = await response.json();
        return data
    }catch(err){
        console.log(err)
    }
}

let repos = fetchData("https://api.github.com/users/elzerowebschool/repos");
repos.then(resolveValue => {
    for(let i = 0; i < resolveValue.length; i++){
        console.log(resolveValue[i].full_name)
    }
})
 */

/* let loadingElement = document.querySelector(".loading");
let postsElement = document.querySelector(".posts");

async function fetchPhotos(url){
    let loading = false;
    if(!loading){
        let response = await fetch(url);
        let photos = await response.json();
        if(photos.length !== 0){
            loading = true
            photos.forEach(photo => {
                let postBodyElement = document.createElement("p");
                postBodyElement.appendChild(document.createTextNode(photo.title));
                postsElement.appendChild(postBodyElement); 
            })
        }else{
            loading = false
            postsElement.innerHTML = "Loading...";
        }
    }

    setTimeout(() => {
        if(loading === false){
            postsElement.innerHTML = "Could not load data!!"
        }
    }, 15000)

}

fetchPhotos("https://jsonplaceholder.typicode.com/photos"); */
/* 
let theOrderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function shuffleArray(array){
    let current = array.length,
        temp,
        random;

    while(current > 0){
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[random] = array[random];
        array[current] = array[random];
        array[random] = temp;
    }
    return [...new Set(array)];
} */
/* 
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let word = mix.map(ele => {
    return isNaN(ele) ? ele : ''
}).reduce((acc, curr) => acc + curr);

console.log(word)  */

/* let myString = "EElllzzzzzzzeroo";
let newArray = []
let myWord = myString.split('').filter((ele, index, arr) => arr.indexOf(ele) === index).join('')

console.log(myWord) */

/* let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let numbers = numsAndStrings.filter(ele => !isNaN(ele)).map(ele => -ele)

console.log(numbers) */

/* let myArray = [["E", "l"], "z", ["e", "r"], "o"];
let word = myArray.reduce((acc, curr) => {
    return acc + curr
}).split(",").join("")

console.log(word) */
/* 
let tasks = [
    {
        id: 1,
        name: 'Dentist appointment'
    },
    {
        id: 2,
        name: 'Train Muay Thai'
    },
    {
        id: 3,
        name: 'Watch PHP Lessons'
    },
    {
        id: 4,
        name: 'Watch a movie'
    }
]

function addTask(arrayOfArray){
    arrayOfArray.push({id: arrayOfArray.length + 1, name: 'do some exercises'});
}

function deleteTask(id){
    let filteredTasks = tasks.filter(task => task.id !== id);
    tasks = [...filteredTasks];
}

let typeOfTask = 'Add';

if(typeOfTask === 'Add'){
    addTask(tasks)
}else{
    deleteTask(1)
    deleteTask(3)
}

console.log(tasks)
 */


// Bubble sort
/* let unorderedNumbers = [4, 8, 1, 6, 9, 3, 7, 0];

for(let i = 0; i < unorderedNumbers.length - 1; i++){
    for(j = 0; j < unorderedNumbers.length - i - 1; j++){
        if(unorderedNumbers[j] > unorderedNumbers[j + 1]){
            let temp = unorderedNumbers[j];
            unorderedNumbers[j] = unorderedNumbers[j + 1];
            unorderedNumbers[j + 1] = temp
        }
    }
}

console.log(unorderedNumbers) */

// Recursion

/* function rec(n){
    if(n === 0){
        return;
    }
    console.log(`step ${n}`);
    rec(n - 1)
}
rec(5) */

/* function drawing(num){
    if(num <= 0){
        return;
    }
    drawing(num - 1)
    for(let i = 0; i < num; i++){
        document.write("#")
    }
    document.write("\n")
}

drawing(4) */

function factorial(n){
    if(n === 1){
        return;
    }else{
        return factorial(n - 1) * n
    }
}

console.log(factorial(4))

