import displayShips from "./displayShips.js";
import placeOnModal from "./placeOnModal"

let ships=["Carrier","Battleship","destroyer1","destroyer2","patrol boat"]
let carrierNOTX=[7,17,27,37,47,57,67,77,87,97];
let battleshipNOTX=[8,18,28,38,48,58,68,78,88,98];
let destroyerNOTX=[9,19,29,39,49,59,69,79,89,99];
let carrierNOTY=[70,71,72,73,74,75,76,77,78,79];
let battleshipNOTY=[80,81,82,83,84,85,86,87,88,89];
let destroyerNOTY=[90,91,92,93,94,95,96,97,98,99];
let Carrier =[];
let Battleship = [];
let destroyerOne = [];
let destroyerTwo =[];

let patrolBoat =[];
let canYouPlace = true;
let rotate = document.querySelector(".rotate-btn");
let roteValue = rotate.innerHTML[rotate.innerHTML.length -1];
let shipTitle= document.getElementById("shipTitle");
function chooseShip (){

    let shipIndex = 0;
        let boardPieces = document.querySelectorAll(".modal-board-piece")
let ship = ships[shipIndex]
if(shipIndex === ships.length){
 
displayShips();



}else{
    console.log(ship)
    console.log(roteValue)
        boardPieces.forEach((piece,index)=>{
            piece.addEventListener("mouseover", (event)=>{
                if(ship === "Carrier"){
                    if(roteValue === "Y"){
                        let pieceIndex = index
                        if(carrierNOTX.includes(index)){
                            for (let i = 0; i <3; i++) {
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex++;
                             
                          }
                        }else if(battleshipNOTX.includes(index)){
                            for (let i = 0; i <2; i++) {
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex++;
                             
                          }
                        }else if(destroyerNOTX.includes(index)){
                            for (let i = 0; i <1; i++) {
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex++;
                             
                          }
                        }else{
                            for (let i = 0; i <4; i++) {
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex++;
                             
                          }
                        }
                    }
                    if(roteValue === "X"){
                        console.log(index)
                        let pieceIndex = index
                        if(carrierNOTY.includes(index)){
                            for (let i = 0; i <3; i++) {
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex+=10;
                             
                          }
                        }else if(battleshipNOTY.includes(index)){
                            for (let i = 0; i <2; i++) {
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex+=10;
                             
                          }
                        }else if(destroyerNOTY.includes(index)){
                          
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex+=10;
                             
                        
                        }else{
                            for (let i = 0; i <4; i++) {
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex+=10;
                             
                          }
                        }
                    }
                 
                }
                if(ship === "Battleship"){
                    if(roteValue === "Y"){
                        let pieceIndex = index;
                        if(battleshipNOTX.includes(index)){
                            for (let i = 0; i <2; i++) {
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex++;
                             
                          }}
                         else if(destroyerNOTX.includes(index)){
                            for (let i = 0; i <1; i++) {
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex++;
                             
                          }
                        }else{
                            for (let i = 0; i <3; i++) {
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex++;
                             
                          }
                        }
                    }
                    if(roteValue === "X"){
                        let pieceIndex = index
                        for (let i = 0; i < 3; i++) {
                          
                       boardPieces[pieceIndex].classList.add("choosing");
                       pieceIndex+= 10;
                          }
                    }
                
                }
                if(ship === "destroyer1"  ||ship === "destroyer2" ){
                    let pieceIndex = index
                    if(roteValue === "Y"){
                        if(destroyerNOTX.includes(index)){
                            for (let i = 0; i <1; i++) {
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex++;
                             
                          }
                        }else{
                            for (let i = 0; i <2; i++) {
                            
                                boardPieces[pieceIndex].classList.add("choosing");
                                pieceIndex++;
                             
                          }
                        }
                    }
                    if(roteValue === "X"){
                        let pieceIndex = index
                        for (let i = 0; i < 2; i++) {
                          
                       boardPieces[pieceIndex].classList.add("choosing");
                       pieceIndex+= 10;
                          }
                    }
                }
                if(ship === "patrol boat"){
                
                        let pieceIndex = index;
                        boardPieces[pieceIndex].classList.add("choosing");
                       
                    
                   }
            })
        })
        boardPieces.forEach((piece,index)=>{
            piece.addEventListener("mouseleave",(event)=>{
                if(ship === "Carrier"){
                    if(roteValue === "Y"){
                        let pieceIndex = index
                        for (let i = 0; i < 4; i++) {
                          
                       boardPieces[pieceIndex].classList.remove("choosing");
                       pieceIndex++;
                          }
                    }
                    if(roteValue === "X"){
                        let pieceIndex = index
                        for (let i = 0; i < 4; i++) {
                          
                       boardPieces[pieceIndex].classList.remove("choosing");
                       pieceIndex+= 10;
                          }
                    }
                }
                if(ship === "Battleship"){
                    if(roteValue === "Y"){
                        let pieceIndex = index
                        for (let i = 0; i < 3; i++) {
                          
                       boardPieces[pieceIndex].classList.remove("choosing");
                       pieceIndex++;
                          }
                    }
                    if(roteValue === "X"){
                        let pieceIndex = index
                        for (let i = 0; i < 3; i++) {
                          
                       boardPieces[pieceIndex].classList.remove("choosing");
                       pieceIndex+= 10;
                          }
                    }
                }
                if(ship === "destroyer1"  ||ship === "destroyer2"){
                    if(roteValue === "Y"){
                        let pieceIndex = index
                        for (let i = 0; i < 2; i++) {
                          
                       boardPieces[pieceIndex].classList.remove("choosing");
                       pieceIndex++;
                          }
                    }
                    if(roteValue === "X"){
                        let pieceIndex = index
                        for (let i = 0; i < 2; i++) {
                          
                       boardPieces[pieceIndex].classList.remove("choosing");
                       pieceIndex+= 10;
                          }
                    }
                }
                if(ship === "patrol boat"){
                 
                        let pieceIndex = index
                     
                          
                       boardPieces[pieceIndex].classList.remove("choosing");
                     
                        
                    }
                  
                
            })
        })
    
        boardPieces.forEach((piece)=>{
            piece.addEventListener("click",()=>{
                
                if (ship === "Carrier"){
                    shipTitle.innerHTML=` Place your ${ship}` ;
                    boardPieces.forEach((piece,index)=>{
                        if(piece.classList.contains("choosing")){
                            Carrier.push(index)
                        }
                    })
                   if(Carrier.length === 4){
                    shipIndex++
                    ship = ships[shipIndex]
                    placeOnModal("Carrier")
                    boardPieces.forEach((piece)=>piece.classList.remove("choosing"))
                   }else{
                    Carrier=[];
                   }
                  
                      }
                if (ship === "Battleship"){
                    shipTitle.innerHTML=` Place your ${ship}` ;
                    boardPieces.forEach((piece,index)=>{
                        if(piece.classList.contains("choosing")){
                            Battleship.push(index)
                        }
                    })
                   if(Battleship.length === 3){
                    shipIndex++
                    ship = ships[shipIndex]
                    placeOnModal("Battleship")
                    boardPieces.forEach((piece)=>piece.classList.remove("choosing"))
                   }else{
                    Battleship=[];
                   }
                    canYouPlace = true;
                 
                  
                }
                if (ship === "destroyer1"){
                    shipTitle.innerHTML=` Place your ${ship}` ;
                    boardPieces.forEach((piece,index)=>{
                        if(piece.classList.contains("choosing")){
                            destroyerOne.push(index)
                        }
                    })
                    for (let i = 0; i < destroyerOne.length; i++) {
                        if(   boardPieces[destroyerOne[i]].classList.contains("chosen")){
                          canYouPlace = false
                        }
                      
                      }
                    if(canYouPlace !== false){
                        if(destroyerOne.length === 2){
                            shipIndex++
                            ship = ships[shipIndex]
                            placeOnModal("destroyer1")
                            boardPieces.forEach((piece)=>piece.classList.remove("choosing"))
                           }else{
                            destroyerOne=[];
                           }
                    }
                    else{
                        destroyerOne=[];
                    }
                    canYouPlace = true;
                  
                 
                }
                if (ship === "destroyer2"){
                    shipTitle.innerHTML=` Place your ${ship}` ;
                    boardPieces.forEach((piece,index)=>{
                        if(piece.classList.contains("choosing")){
                            destroyerTwo.push(index)
                        }
                    })
                    for (let i = 0; i < destroyerTwo.length; i++) {
                        if(   boardPieces[destroyerTwo[i]].classList.contains("chosen")){
                          canYouPlace = false
                        }
                      
                      }
                    if(canYouPlace !== false){
                        if(destroyerTwo.length === 2){
                            shipIndex++
                            ship = ships[shipIndex]
                            placeOnModal("destroyer2")
                            boardPieces.forEach((piece)=>piece.classList.remove("choosing"))
                           }else{
                            destroyerTwo=[];
                           }
                    }
                    else{
                        destroyerTwo=[];
                    }
                    canYouPlace = true;
                 
                
                }
                if (ship === "patrol boat"){
                    shipTitle.innerHTML=` Place your ${ship}` ;
                    boardPieces.forEach((piece,index)=>{
                        if(piece.classList.contains("choosing")){
                            patrolBoat.push(index)
                        }
                    })


                    for (let i = 0; i < patrolBoat.length; i++) {
                        if(   boardPieces[patrolBoat[i]].classList.contains("chosen")){
                          canYouPlace = false
                        }
                      
                      }
                    if(canYouPlace !== false){
                        if(patrolBoat.length === 1){
                            shipIndex++
                            ship = ships[shipIndex]
                            placeOnModal("patrol boat")
                            boardPieces.forEach((piece)=>piece.classList.remove("choosing"))
                           }else{
                            patrolBoat=[];
                           }
                           if(shipIndex === ships.length){
                            displayShips();
                            }
                    }
                    else{
                        destroyerOne=[];
                    }
                    canYouPlace = true;
                 

                 
                   console.log(shipIndex)
                   console.log(ship)
                  
                }
            })
        }) ;
}












}
export {chooseShip,Carrier,Battleship,destroyerOne,destroyerTwo,patrolBoat,roteValue}