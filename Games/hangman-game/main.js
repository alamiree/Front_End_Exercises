//Select all the needed elements
let lettersContainer = document.querySelector(".letters");
let categorySpan = document.querySelector(".game-category span");
let theGuessLetter = document.querySelector(".letters-guess");
let theHangMan = document.querySelector(".hangman-draw");

//Create the span letters
let allLetters = "abcdefghijklmnopqrstuvwxyz";
let allLettersArray = Array.from(allLetters);
allLettersArray.forEach((letter) => {
    
    //create a span for each letter
    let letterSpanElement = document.createElement('span');
    let letterSpanText = document.createTextNode(letter);
    letterSpanElement.className = 'letter-box';
    letterSpanElement.appendChild(letterSpanText);
    lettersContainer.appendChild(letterSpanElement);
});

const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
  }
//Get the random category and random word
let getAllObjKeys = Object.keys(words)
let randomCategory = getAllObjKeys[Math.floor(Math.random() * getAllObjKeys.length)];
//Append the randomCategory into the catgory element
categorySpan.innerHTML = randomCategory;

let getTheCatArray = words[randomCategory]
let randomWord = getTheCatArray[Math.floor(Math.random() * getTheCatArray.length)];
//Convert the randomWord into array
let randomWordArray = Array.from(randomWord);
randomWordArray.forEach((letter) => {
    //create the random letter span
    let randomLetterElement = document.createElement('span');
    if(letter === ' '){
        randomLetterElement.className = "with-space"
    }
    theGuessLetter.appendChild(randomLetterElement);
})

let LetterBox = document.querySelectorAll(".letters .letter-box");
let numOftries = 0;
let guessSpans = document.querySelectorAll(".letters-guess span");

document.addEventListener("click", function(e){
    let guessStatus = false;
    if(e.target.className === 'letter-box'){
        e.target.classList.add("clicked")
        randomWordArray.forEach((letter, index) => {
            if(e.target.textContent.toLowerCase() === letter.toLowerCase()){
                guessSpans[index].innerHTML = e.target.textContent;
                guessStatus = true;
            }
        })
        if(guessStatus === false){
            numOftries += 1;
            theHangMan.classList.add(`wrong-${numOftries}`);
        }  
    }
    if(theHangMan.classList.contains("wrong-1")){
        document.querySelector(".the-draw").style.display = 'block';
    }  
    if(theHangMan.classList.contains("wrong-2")){
        document.querySelector(".the-stand").style.display = 'block';
    }
    if(theHangMan.classList.contains("wrong-3")){
        document.querySelector(".the-hang").style.display = 'block';
    }
    if(theHangMan.classList.contains("wrong-4")){
        document.querySelector(".the-rope").style.display = 'block';
    }
    if(theHangMan.classList.contains("wrong-5")){
        document.querySelector(".the-head").style.display = 'block';
    }
    if(theHangMan.classList.contains("wrong-6")){
        document.querySelector(".the-body").style.display = 'block';
    }
    if(theHangMan.classList.contains("wrong-7")){
        document.querySelector(".the-arms").style.display = 'block';
    }
    if(theHangMan.classList.contains("wrong-8")){
        document.querySelector(".the-legs").style.display = 'block';
    }
    
    if(numOftries == 8){
        let LetterBoxArray = Array.from(LetterBox)
        LetterBoxArray.forEach((letter) => {
            letter.classList.add("clicked")
        })
        createPopup();
    }
    
})

function createPopup(){
    let popupElement = document.createElement('div');
    popupElement.className = "popup";

    let loadElement = document.createElement('button');
    let buttonText = document.createTextNode("Start again?");
    loadElement.appendChild(buttonText)
    loadElement.className = "load-button";
    
    popupElement.appendChild(loadElement);
    document.body.appendChild(popupElement)
}

document.addEventListener("click", (e) => {
    if(e.target.className === 'load-button'){
        setTimeout(function(){
            window.location.reload()
        }, 1000)
    }
})