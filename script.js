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

let score = Number(document.querySelector('.score').textContent);
console.log(score, typeof score);

document.querySelector('.check').addEventListener('click', function () {
  // takes two paramenters, that is type of event and the event handler function
  const guess = Number(document.querySelector('.guess').value); // returns string value by default
  // when there is no guess
  if (!guess) {
    console.warn(
      'There is nothing to print out, please enter the value for guess!'
    );
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    // when player wins.
    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    // when the guess number is to high
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📈 Too High!';
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // when the guess number is to low
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📉 Too Low';
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100 + 1); // changing random number to avoid some bugs in the code
  document.querySelector('.score').textContent = 20; // resetting the value of score to initial one
  document.querySelector('.number').textContent = '?'; // seting up secret box unknown, to its initial value
  document.querySelector('body').style.backgroundColor = '#222'; // setting up bg color of body to initial stage
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = '🤔 Start guessing ... ';
  document.querySelector('.guess').value = '';
});
