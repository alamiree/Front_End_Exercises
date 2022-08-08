
document.querySelector(".control-buttons span").onclick = function(){

    document.querySelector(".control-buttons").remove();

    let name = prompt("What is your name? ");

    if(name === null || name === ""){
        document.querySelector(".name span").textContent = "Unknown";
    }else{
        document.querySelector(".name span").textContent = name;
    }

}

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);


blocks.forEach((block, index) => {
    
    // Add CSS Order Property
    block.style.order = orderRange[index];

    block.addEventListener("click", function(){
        flipBlock(block)
    })
})


function flipBlock(selectedBlock){
    selectedBlock.classList.add("is-flipped");

    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains("is-flipped"));

    if(allFlippedBlocks.length === 2){

        stopClicking();

        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);

    }

}

function stopClicking(){
    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');
    }, 1000)
}

function checkMatchedBlocks(firstBlock, secondBlock){

    let triesElement = document.querySelector('.tries span');

    if(firstBlock.dataset.animal === secondBlock.dataset.animal){
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
    }else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {

            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
      
          }, 1000);

    }

}

function shuffle(array){
    let current = array.length,
        temp,
        random;
    
    while(current > 0){

        random = Math.floor(Math.random() * current);

        current--

        temp = array[current];

        array[current] = array[random];

        array[random] = temp;

    }
    return array
}