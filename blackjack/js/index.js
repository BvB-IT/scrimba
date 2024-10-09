let cardsDrawn = 2;

function startgame() {
  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let firstCard = getRndInt(0, 10) + 1;
  let secondCard = getRndInt(0, 10) + 1;
  let cards = [firstCard, secondCard];
  let sum = firstCard + secondCard;
  let hasBlackjack = false;
  let isAlive = true;
  let message = '';

  let card1 = document.getElementById('firstcard-el');
  let card2 = document.getElementById('secondcard-el');
  let sumCards = document.getElementById('sum-el');
  let resultEl = document.getElementById('message-el');

  if (sum === 21) {
    message = "Congrats you've got Blackjack";
    //   console.log("Congrats you've got Blackjack");
    hasBlackjack = true;
  } else if (sum < 21) {
    //   console.log('Do you want to draw another Card?');
    message = 'Do you want to draw another Card?';
  } else {
    //   console.log("I'm sorry you lose");
    message = "I'm sorry you lose";
    isAlive = false;
  }
  console.log(message);
  card1.textContent = firstCard;
  card2.textContent = secondCard;
  sumCards.textContent = sum;
  resultEl.textContent = message;
  console.log(firstCard);
  console.log(secondCard);
}

function isCardDrawn(divId) {
  let div = document.getElementById(divId);
  if (div) {
    return window.getComputedStyle(div).display !== 'none';
  } else {
    console.warn(`Element with id "${divId}" not found.`);
    return false;
  }
}

function drawCard() {
  cardsDrawn++;
  let nextCardId = `card${cardsDrawn}-el`;
  let nextCard = document.getElementById(nextCardId);

  if (nextCard) {
    if (!isCardDrawn(nextCardId)) {
      console.log('Card 3 is currently hidden. Making it visible.');
      nextCard.classList.remove('hidden');
      nextCard.classList.add('shown');
    } else {
      console.log('card is already drawn');
    }
  } else {
    console.log('no more cards to draw');
  }
}
