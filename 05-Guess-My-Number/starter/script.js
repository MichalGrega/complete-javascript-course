'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent = number;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //NO INPUT
  if (!guess) {
    displayMessage('⛔ Enter a number');

    //WHEN PLAYER WINS
  } else if (guess === number) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
    }

    //WHEN GUESS IS WRONG
  } else {
    displayMessage(guess > number ? '🔼 Too high!' : '🔽 Too low!');
    score--;
  }

  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;

  //GAME OVER
  if (score === 0) {
    displayMessage('💥 Game Over!');
    return;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing... ');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
