
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El= document.getElementById('current--0');
const current1El= document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew= document.querySelector('.btn--new');
const btnHold= document.querySelector('.btn--hold');
const btnRoll= document.querySelector('.btn--roll');
const player0El= document.querySelector('.player--0');
const player1El= document.querySelector('.player--1');
const rulesBtn= document.querySelector('.rulesBtn');
const rulesModal= document.querySelector('.rulesModal');
const overlay= document.querySelector('.overlay');

// applying first conditions
let scores, currentScore,activePlayer,playing;

const init= function(){
 scores= [0,0];
 currentScore= 0;
 activePlayer= 0;
 playing = true;
diceEl.classList.add('hidden');
score0El.innerText= 0;
score1El.innerText= 0;
current0El.innerText= 0;
current1El.innerText= 0;
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
}

const switchPlayer= function (){
  currentScore= 0;
    document.getElementById(`current--${activePlayer}`).innerText= currentScore;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    activePlayer= activePlayer===0?1:0;
}

// applying dice functionality
btnRoll.addEventListener('click',()=>{
  if(playing){
    // Generate a random dice
    const dice= Math.trunc(Math.random()*6)+1;
    console.log(dice);
    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src= `dice-${dice}.png`;
    //check if dice == 1 
    if(dice!==1){
    // Add dice to current Score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).innerText= currentScore;
  }else{
    // switch the player
    switchPlayer();
  }
}
})



btnHold.addEventListener('click',()=>{
  // Add current score to main score
    if(playing){
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).innerText= scores[activePlayer];
    // check if score == 100 then player wins
    if(scores[activePlayer]>=100){
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else{
      switchPlayer();
    }
  }
})

rulesBtn.addEventListener('mouseenter',(e)=>{
  rulesModal.classList.remove('hidden')
  overlay.classList.remove('hidden')                                
})

rulesBtn.addEventListener('mouseout',(e)=>{
  rulesModal.classList.add('hidden')
  overlay.classList.add('hidden')
})

// new Game
btnNew.addEventListener('click',init)
// Start Game
init();
// Rules Btn


