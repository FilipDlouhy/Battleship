
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
let canYouPlace = false;
function chooseRandom(){
let boardTwo = document.querySelectorAll(".board-piece-two")
    for (let i = 0; i < ships.length; i++) {
 
let XorY = Math.round(getRandomArbitrary(1,2))
console.log(XorY)
if( ships[i]==="Carrier"){
    if(XorY === 1){
        let row = Math.round(getRandomArbitrary(0,9))
        let col =Math.round(getRandomArbitrary(0,6))
        let startingPosition = row.toString() + col.toString();
        startingPosition = parseInt(startingPosition)
        for(let i = 0; i < 4; i++){
            boardTwo[startingPosition].classList.add("enemy");
            startingPosition++;
        }
    }else if(XorY === 2){
        let row = Math.round(getRandomArbitrary(0,6))
        let col =Math.round(getRandomArbitrary(0,9))
        let startingPosition = row.toString() + col.toString();
        startingPosition = parseInt(startingPosition)
        for(let i = 0; i < 4; i++){
            boardTwo[startingPosition].classList.add("enemy");
            startingPosition+=10;
        }
    }

    

}

if( ships[i]==="Battleship"){
while(canYouPlace === false){
    if(XorY === 1){

        let row = Math.round(getRandomArbitrary(0,9))
        let col =Math.round(getRandomArbitrary(0,7))
        let startingPosition = row.toString() + col.toString();
        startingPosition = parseInt(startingPosition)
        for(let i = 0; i < 3; i++){
            if( boardTwo[startingPosition].classList.contains("enemy")){    

                canYouPlace= false;
            }else{
                canYouPlace= true; 
            }
            startingPosition++;}
        if(canYouPlace !== false){
            startingPosition = parseInt(row.toString() + col.toString());
            for(let i = 0; i < 3; i++){
                boardTwo[startingPosition].classList.add("enemy");
                startingPosition++;
            }
        }
       
    }else if(XorY === 2){
        let row = Math.round(getRandomArbitrary(0,7))
        let col =Math.round(getRandomArbitrary(0,9))
        let startingPosition = row.toString() + col.toString();
        startingPosition = parseInt(startingPosition)
        for(let i = 0; i < 3; i++){
            if( boardTwo[startingPosition].classList.contains("enemy")){    

                canYouPlace= false;
            }else{
                canYouPlace= true; 
            }
            startingPosition+=10;}
            if(canYouPlace !== false){
                startingPosition = parseInt(row.toString() + col.toString());
                for(let i = 0; i < 3; i++){
                    boardTwo[startingPosition].classList.add("enemy");
                    startingPosition+=10;
                }
            }
    }
}

canYouPlace = false;

    

}

if( ships[i]==="destroyer1"){
    while(canYouPlace === false){
        if(XorY === 1){
    
            let row = Math.round(getRandomArbitrary(0,9))
            let col =Math.round(getRandomArbitrary(0,8))
            let startingPosition = row.toString() + col.toString();
            startingPosition = parseInt(startingPosition)
            for(let i = 0; i < 2; i++){
                if( boardTwo[startingPosition].classList.contains("enemy")){    
    
                    canYouPlace= false;
                }else{
                    canYouPlace= true; 
                }
                startingPosition++;}
            if(canYouPlace !== false){
                startingPosition = parseInt(row.toString() + col.toString());
                for(let i = 0; i < 2; i++){
                    boardTwo[startingPosition].classList.add("enemy");
                    startingPosition++;
                }
            }
           
        }else if(XorY === 2){
            let row = Math.round(getRandomArbitrary(0,8))
            let col =Math.round(getRandomArbitrary(0,9))
            let startingPosition = row.toString() + col.toString();
            startingPosition = parseInt(startingPosition)
            for(let i = 0; i < 2; i++){
                if( boardTwo[startingPosition].classList.contains("enemy")){    
    
                    canYouPlace= false;
                }else{
                    canYouPlace= true; 
                }
                startingPosition+=10;}
                if(canYouPlace !== false){
                    startingPosition = parseInt(row.toString() + col.toString());
                    for(let i = 0; i < 2; i++){
                        boardTwo[startingPosition].classList.add("enemy");
                        startingPosition+=10;
                    }
                }
        }
    }
    canYouPlace = false;
}
if( ships[i]==="destroyer2"){
    while(canYouPlace === false){
        if(XorY === 1){
    
            let row = Math.round(getRandomArbitrary(0,9))
            let col =Math.round(getRandomArbitrary(0,8))
            let startingPosition = row.toString() + col.toString();
            startingPosition = parseInt(startingPosition)
            for(let i = 0; i < 2; i++){
                if( boardTwo[startingPosition].classList.contains("enemy")){    
    
                    canYouPlace= false;
                }else{
                    canYouPlace= true; 
                }
                startingPosition++;}
            if(canYouPlace !== false){
                startingPosition = parseInt(row.toString() + col.toString());
                for(let i = 0; i < 2; i++){
                    boardTwo[startingPosition].classList.add("enemy");
                    startingPosition++;
                }
            }
           
        }else if(XorY === 2){
            let row = Math.round(getRandomArbitrary(0,8))
            let col =Math.round(getRandomArbitrary(0,9))
            let startingPosition = row.toString() + col.toString();
            startingPosition = parseInt(startingPosition)
            for(let i = 0; i < 2; i++){
                if( boardTwo[startingPosition].classList.contains("enemy")){    
    
                    canYouPlace= false;
                }else{
                    canYouPlace= true; 
                }
                startingPosition+=10;}
                if(canYouPlace !== false){
                    startingPosition = parseInt(row.toString() + col.toString());
                    for(let i = 0; i < 2; i++){
                        boardTwo[startingPosition].classList.add("enemy");
                        startingPosition+=10;
                    }
                }
        }
    }

    
    canYouPlace = false;
}
     

if( ships[i]==="patrol boat"){
    while(canYouPlace === false){
        if(XorY === 1){
    
            let row = Math.round(getRandomArbitrary(0,9))
            let col =Math.round(getRandomArbitrary(0,9))
            let startingPosition = row.toString() + col.toString();
            startingPosition = parseInt(startingPosition)
            for(let i = 0; i < 2; i++){
                if( boardTwo[startingPosition].classList.contains("enemy")){    
    
                    canYouPlace= false;
                }else{
                    canYouPlace= true; 
                }
                startingPosition++;}
            if(canYouPlace !== false){
                startingPosition = parseInt(row.toString() + col.toString());
                for(let i = 0; i < 1; i++){
                    boardTwo[startingPosition].classList.add("enemy");
                    startingPosition++;
                }
            }
           
        }else if(XorY === 2){
            let row = Math.round(getRandomArbitrary(0,9))
            let col =Math.round(getRandomArbitrary(0,9))
            let startingPosition = row.toString() + col.toString();
            startingPosition = parseInt(startingPosition)
            for(let i = 0; i <1; i++){
                if( boardTwo[startingPosition].classList.contains("enemy")){    
    
                    canYouPlace= false;
                }else{
                    canYouPlace= true; 
                }
                startingPosition+=10;}
                if(canYouPlace !== false){
                    startingPosition = parseInt(row.toString() + col.toString());
                    for(let i = 0; i < 1; i++){
                        boardTwo[startingPosition].classList.add("enemy");
                        startingPosition+=10;
                    }
                }
        }
    }
    canYouPlace = false;
}
     





}


}




function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export default chooseRandom