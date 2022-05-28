'use strict';

// const messageStr = document.querySelector('.message');
// console.log(messageStr.textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 40;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);

// implementing logic of our game;
let secretNumber = Math.trunc(Math.random() * 100 + 1);
let highestScore = 0;
// console.log(secretNumber);

// while (secretNumber !== 100) {
//   console.log(secretNumber);
//   secretNumber = Math.trunc(Math.random() * 100 + 1);
//   if (secretNumber === 100) {
//     console.log('loop is going to stop');
//   }
// }
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
  // takes two paramenters, that is type of event and the event handler function
  const guess = Number(document.querySelector('.guess').value); // returns string value by default
  // when there is no guess
  if (!guess) {
    console.warn(
      'There is nothing to print out, please enter the value for guess!'
    );
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    // when player wins.
    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('🎉 Correct Number!');
    // displayMessage('🎉 I love you Shakhsanem💖!');
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess !== secretNumber) {
    // when guess is wrong
    if (score > 1) {
      // when the guess number is to high
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100 + 1); // changing random number to avoid some bugs in the code
  score = 20;
  document.querySelector('.score').textContent = score; // resetting the value of score to initial one
  document.querySelector('.number').textContent = '?'; // seting up secret box unknown, to its initial value
  document.querySelector('body').style.backgroundColor = '#222'; // setting up bg color of body to initial stage
  document.querySelector('.number').style.width = '15rem';
  displayMessage('🤔 Start guessing ... ');
  document.querySelector('.guess').value = '';
  console.log(secretNumber);
});
