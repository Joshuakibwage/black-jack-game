 let player = {

  name: "josh",
  chips: 200
 }
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');

// let player = {
//   name: "josh",
//   chips: 145
// }


playerEl.textContent = player.name + ": $" + player.chips;

// console.log(cards)

function getRandomCard(){

  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if(randomNumber > 10){
    return 10
  }else if(randomNumber === 1) {
    return 11
  }else{
    return randomNumber
  }

}

function startGame() {

  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
    renderGame()
}

function renderGame(){
  
    cardsEl.textContent = "cards: " ;

    for(let i = 0; i < cards.length; i++){
      cardsEl.textContent += cards[i] + " ";
    }

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


function newCard() {
  // 3. Use the getRandomCard() to set the value of card
  if(isAlive === true && hasBlackJack === false){

    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
  }

}

 