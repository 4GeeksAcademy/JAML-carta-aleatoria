import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //["♦", "♥", "♠", "♣"] ["Diamante", "Corazon", "Pica", "Trebol"]
  //write your code here
  let palos = ["♦", "♥", "♠", "♣"]
  let numerosCarta = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

  let palosRandom = Math.floor(Math.random() * palos.length)
  let numerosRandom = Math.floor(Math.random() * numerosCarta.length)
    
  let valorRandom = document.getElementById("numeroCarta")
  valorRandom.innerHTML = numerosCarta[numerosRandom]

  let naipeOne = document.getElementById("naipe-one")
  naipeOne.innerHTML = palos[palosRandom]

  let naipeTwo = document.getElementById("naipe-two")
  naipeTwo.innerHTML = palos[palosRandom]


  function colorNaipe() {

    if(palos[palosRandom] === "♦" || palos[palosRandom] === "♥") {
      document.getElementById("naipe-one").style.color = "red";
      document.getElementById("naipe-two").style.color = "red";
    } else {
      document.getElementById("naipe-one").style.color = "black";
      document.getElementById("naipe-two").style.color = "black"
    }
}
colorNaipe()
};
