// 2. Use getRandomCard() to set the values of firstCard and secondCard
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

let player = {
  name: 'Per',
  chips: 145,
};

// exercise 1
// let airBnbCastle = {
//   available: true,
//   chambers: 25,
//   castlename: 'green meadow',
//   reviews: 155,
//   meals: ['breakfast', 'lunch', 'dinner'],
// };

// console.log(airBnbCastle.castlename);

// exercise 2
// let person = {
//   name: 'kees',
//   age: 35,
//   country: 'Romenia',
// };

// function logData() {
//   // let showPerson = person.name;
//   let showPerson =
//     person.name +
//     ' is ' +
//     person.age +
//     ' years old and lives in  ' +
//     person.country;
//   return showPerson;
// }

// console.log(logData());

// exercise 3

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

// let age = 77;

// if (age < 6) {
//   console.log('free ride');
// } else if (age < 18) {
//   console.log('child discount');
// } else if (age < 27) {
//   console.log('student discount');
// } else if (age >= 18 && age < 66) {
//   console.log('full price');
// } else console.log('senior citizen discount');

// exercise 4
//
// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
// largeCountries.pop();
// console.log(largeCountries)
// largeCountries.push("Pakistan")
// console.log(largeCountries)
// largeCountries.shift("Tuvalu")
// console.log(largeCountries)
// largeCountries.unshift("China")
// console.log(largeCountries)

// exercise 5
// let hands = ["rock", "paper", "scissor"]

// // Create a function that returns a random item from the array

// function drawHand() {
//     let draw = Math.floor(Math.random() * 3);
//     return hands[draw];
// }

// console.log(drawHand())

for (let i = 0; i < largeCountries.length; i++) {
  console.log(largeCountries[i]);
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ' $' + player.chips;

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card > 10) {
    card = 10;
  } else {
    return card;
  }

  return card;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
  return sum;
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }

  sumEl.textContent = 'Sum: ' + sum;
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // 3. Use the getRandomCard() to set the value of card
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}
