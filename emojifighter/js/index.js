let fighters = [
  '🐉',
  '🐥',
  '🐊',
  '💩',
  '🦍',
  '🐢',
  '🐩',
  '🦭',
  '🦀',
  '🐝',
  '🤖',
  '🐘',
  '🐸',
  '🕷',
  '🐆',
  '🦕',
  '🦁',
];

let stageEl = document.getElementById('stage');
let fightButton = document.getElementById('fightButton');

fightButton.addEventListener('click', randomFighter);
// When the user clicks on the "Pick Fighters" button, pick two random
// emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
function randomFighter() {
  let fighter1 = Math.floor(Math.random() * fighters.length);
  let fighter2 = Math.floor(Math.random() * fighters.length);
  let randomDraw1 = fighters[fighter1];
  let randomDraw2 = fighters[fighter2];
  return (stageEl.textContent = randomDraw1 + ' ' + 'VS' + ' ' + randomDraw2);
}
