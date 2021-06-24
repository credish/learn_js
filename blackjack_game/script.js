let cards = []; // ordered list of cards
let sum=0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let startGame = document.getElementById("start-game");
let newCard = document.getElementById("new-card");
let messageEl = document.getElementById("message-el");
let cardDisplay = document.getElementById("cards-display");
let sumDisplay = document.getElementById("sum-display");
// let sumDisplay = document.querySelector("#sum-display");

let player = {
    name: "Celeste",
    chips: 145 
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10){
        return 10;
    }
    else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
    
}

function startTheGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = (firstCard + secondCard);
    renderGame();
}

function renderGame(){
    cardDisplay.textContent = "Cards: ";
    for (let i=0; i<cards.length; i++){
        cardDisplay.textContent += cards[i] + " ";
    }
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
}

function getNewCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

startGame.addEventListener("click", startTheGame);
newCard.addEventListener("click", getNewCard);










