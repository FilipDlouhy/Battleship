import * as chooseShip from "./choosingShips";

function displayShips(){

    let modalBackground = document.querySelector(".modal-background")
    modalBackground.style.zIndex="-1500";
    modalBackground.style.background ="none";
    let modal =document.querySelector(".modal");
    modal.style.display="none";
let boardOnePieces = document.querySelectorAll(".board-piece-one");
for (let i = 0; i < chooseShip.Carrier.length; i++) {
    boardOnePieces[chooseShip.Carrier[i]].classList.add("chosen");
  }
  for (let i = 0; i < chooseShip.Battleship.length; i++) {
    boardOnePieces[chooseShip.Battleship[i]].classList.add("chosen");
  }
  for (let i = 0; i < chooseShip.destroyerOne.length; i++) {
    boardOnePieces[chooseShip.destroyerOne[i]].classList.add("chosen");
  }
  for (let i = 0; i < chooseShip.destroyerTwo.length; i++) {
    boardOnePieces[chooseShip.destroyerTwo[i]].classList.add("chosen");
  }
  for (let i = 0; i < chooseShip.patrolBoat.length; i++) {
    boardOnePieces[chooseShip.patrolBoat[i]].classList.add("chosen");
  }


}
export default displayShips