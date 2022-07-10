import * as chooseShip from "./choosingShips";
import chooseRandom from "./chooserandom.js"

let rotate = document.querySelector(".rotate-btn");
let roteValue = rotate.innerHTML[rotate.innerHTML.length -1];

let countOne =0;
let countTwo=0;
chooseShip.chooseShip();
chooseRandom()
shootAndWin();
rotate.addEventListener("click",()=>{

    if(rotate.innerHTML[rotate.innerHTML.length -1]==="Y"){
        rotate.innerHTML="Rotate to X";
        chooseShip.roteValue ="X"
    }else{
        rotate.innerHTML="Rotate to Y";
        chooseShip.roteValue ="Y"
    }
})


function shootAndWin(){

    let boardTwo = document.querySelectorAll(".board-piece-two")
    


     boardTwo.forEach((piece)=>{
        piece.addEventListener("click",(event)=>{
            if(event.target.classList.contains("hit")|| event.target.classList.contains("miss")){
                console.log("debil")
            }else{
                if(event.target.classList.contains("enemy")){
                    event.target.classList.remove("hover");
                    event.target.classList.add("hit");
                    
                    countOne++;
                    leCheck()
                randomShot()
                leCheck()
                }
                else{
                    event.target.classList.remove("hover");
                    event.target.classList.add("miss");
                    
                    leCheck()
                    randomShot()
                    leCheck()
                }
            }
       })
     })
  

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function leCheck(){
    let twinText = document.querySelector("#win-text");
    let gameBoards= document.querySelectorAll(".game-board")
    if(countOne===12){
gameBoards.forEach((board)=>board.style.display = "none")
twinText.innerHTML = "Player won the game";
let myTimeout = setTimeout(location.reload(), 7000);
myTimeout();
    }
    else if(countTwo===12){
        gameBoards.forEach((board)=>board.style.display = "none")
        twinText.innerHTML = "Computer won the game"
       let myTimeout = setTimeout(location.reload(), 7000);
       myTimeout();
            }
}
function randomShot(){
    let randomIndex = Math.round(getRandomArbitrary(0,100));
    let boardOne = document.querySelectorAll(".board-piece-one")

    if(boardOne[randomIndex].classList.contains("hit")|| boardOne[randomIndex].classList.contains("miss")){
      randomShot()
    }
    else if(boardOne[randomIndex].classList.contains("chosen")){
        boardOne[randomIndex].classList.remove("chosen");
        boardOne[randomIndex].classList.add("hit");
        countTwo++;
     
        
      
    }else{
        boardOne[randomIndex].classList.add("miss");
       
       
    }
}


