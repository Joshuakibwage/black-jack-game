let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.getElementById('cards-el');

function getRandomCard(){

  return Math.floor(Math.random() * 12) + 1;
}

function startGame() {
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
  let card = getRandomCard()
  sum += card
  cards.push(card)
  console.log(cards)
  renderGame()
}

 