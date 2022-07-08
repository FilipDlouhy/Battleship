import * as chooseShip from "./choosingShips";
function placeOnModal(ship){
    let boardOnePieces = document.querySelectorAll(".modal-board-piece");
    if(ship === "Carrier"){
        for (let i = 0; i < chooseShip.Carrier.length; i++) {
            boardOnePieces[chooseShip.Carrier[i]].classList.add("chosen");
          }
    }

 else if (ship === "Battleship"){
    for (let i = 0; i < chooseShip.Battleship.length; i++) {
        boardOnePieces[chooseShip.Battleship[i]].classList.add("chosen");
      }
}
else if (ship === "destroyer1"){
    for (let i = 0; i < chooseShip.destroyerOne.length; i++) {
        boardOnePieces[chooseShip.destroyerOne[i]].classList.add("chosen");
      }
}
else if (ship === "destroyer2"){
    for (let i = 0; i < chooseShip.destroyerTwo.length; i++) {
        boardOnePieces[chooseShip.destroyerTwo[i]].classList.add("chosen");
      }
}
else if(ship === "patrol boat"){
    for (let i = 0; i < chooseShip.patrolBoat.length; i++) {
        boardOnePieces[chooseShip.patrolBoat[i]].classList.add("chosen");
      }
}

}
export default placeOnModal