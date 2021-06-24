let firstCard=10;
let secondCard=4;
let cards = [firstCard, secondCard]; // ordered list of cards
let sum=(firstCard + secondCard);
let hasBlackJack = false;
let isAlive = true;
let message = "";
let startGame = document.getElementById("start-game");
let newCard = document.getElementById("new-card");
let messageEl = document.getElementById("message-el");
let cardDisplay = document.getElementById("cards-display");
let sumDisplay = document.getElementById("sum-display");
// let sumDisplay = document.querySelector("#sum-display");

function startTheGame() {
    renderGame();
}

function renderGame(){
    cardDisplay.textContent = "Cards: " + cards[0] + " " + cards[1] + " ";
    sumDisplay.textContent = "Sum: " + sum;
    
    if (sum <= 20){
        message = "Do you want to draw a new card?";
        
    }
    else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game!";
        isAlive=false;
    }

    messageEl.textContent = message;

    console.log(message);
    console.log(sum);
}

function getNewCard() {
    message = "Drawing a new card from the deck!";
    messageEl.textContent = message;
    let card = 2;
    renderGame();
    cards.push(card);
    sum += card;
    cardDisplay.textContent = "Cards: " +  cards;
}

startGame.addEventListener("click", startTheGame);
newCard.addEventListener("click", getNewCard);










