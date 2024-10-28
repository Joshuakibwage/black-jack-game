let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');

function startGame(){
  
    sumEl.textContent = "sum: " + sum;
    if(sum <= 20) {
        message = "Do you want to draw new card!"
        
      }else if(sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true;
      }else{
        message = "You are out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message;
}


 