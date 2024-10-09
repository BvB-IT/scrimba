let scoreHome = 0;
let scoreGuest = 0;
let leaderHome = 'The current leader is Home';
let leaderGuest = 'The current leader is Guest';
let tie = 'It s a tie';

let scoreHomeEl = document.getElementById('scorehome');
let scoreGuestEl = document.getElementById('scoreguest');

function newGame() {
  let resetScoreHome = document.getElementById('scorehome');
  let resetScoreGuest = document.getElementById('scoreguest');
  let resetLeader = document.getElementById('leader');
  scoreHome = 0;
  scoreGuest = 0;
  resetScoreHome.textContent = scoreHome;
  resetScoreGuest.textContent = scoreHome;
  resetLeader.textContent = ' The current leader is';
}

function leader() {
  let leader = document.getElementById('leader');
  let highLightHome = document.getElementById('scorehome');
  let highLightGuest = document.getElementById('scoreguest');
  if (scoreHome > scoreGuest) {
    leader.textContent = leaderHome;
    highLightHome.style.backgroundColor = 'lightblue';
  } else if (scoreHome == scoreGuest) {
    leader.textContent = tie;
    highLightHome.style.backgroundColor = 'black';
    highLightGuest.style.backgroundColor = 'black';
  } else {
    leader.textContent = leaderGuest;
    highLightHome.style.backgroundColor = 'black';
    highLightGuest.style.backgroundColor = 'lightblue';
  }
}

function add1ToScoreHome() {
  scoreHome = scoreHome + 1;
  scoreHomeEl.textContent = scoreHome;
  console.log('button was clicked');
  leader();
}

function add2ToScoreHome() {
  scoreHome = scoreHome + 2;
  scoreHomeEl.textContent = scoreHome;
  console.log('button was clicked');
  leader();
}

function add3ToScoreHome() {
  scoreHome = scoreHome + 3;
  scoreHomeEl.textContent = scoreHome;
  console.log('button was clicked');
  leader();
}

function add1ToScoreGuest() {
  scoreGuest = scoreGuest + 1;
  scoreGuestEl.textContent = scoreGuest;
  console.log('button was clicked');
  leader();
}

function add2ToScoreGuest() {
  scoreGuest = scoreGuest + 2;
  scoreGuestEl.textContent = scoreGuest;
  console.log('button was clicked');
  leader();
}

function add3ToScoreGuest() {
  scoreGuest = scoreGuest + 3;
  scoreGuestEl.textContent = scoreGuest;
  console.log('button was clicked');
  leader();
}
