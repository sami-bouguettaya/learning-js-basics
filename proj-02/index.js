let cards = [];
let sum = 0;
let message ;
let isAlive = false;
let hasBlackjack = false;
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el"); //let sumEL = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "sam",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips;

function getRandomCard() {
  let x = Math.floor(Math.random() * 13) + 1;

  if (x === 1) {
    return 11;
  } else if (/* x === 11 || x === 12 ||x === 13  ou bien */ x >= 10) {
    return 10;
  } else {
    return x;
  }
}
 

function startGame() {
  if (isAlive === false || hasBlackjack == true) {
    hasBlackjack = false
    isAlive = true;
    let firstCard = getRandomCard();
    let secandCard = getRandomCard();
    cards = [firstCard, secandCard];
    sum = firstCard + secandCard;
    renderGame();
  } else {
    return;
  }
}


function renderGame() {
  cardsEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += +cards[i] + " ";
  }
  sumEL.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    message = "Congrat,You've got Blackjack ! ";
    hasBlackjack = true;
  } else {
    message = "You're out of the Game !";
    isAlive = false;
  }

  messageEl.textContent = message;
}


function newCards() {
  if (isAlive === true && hasBlackjack === false) {
    let Card = getRandomCard();
    cards.push(Card);
    sum += Card;
    renderGame();
  } else {
    return;
  }
}
