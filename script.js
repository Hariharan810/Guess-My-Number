'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Answer !!';
document.querySelector('.number').textContent = '5';
document.querySelector('.score').textContent = '15';
document.querySelector('.guess').value = 8;
console.log(document.querySelector('.guess').value);*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number Entered❗';
    displayMessage('No Number Entered❗');
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Answer !!';
    displayMessage('Correct Answer !!');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#0FDC31';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // if wrong
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'Too High😧' : 'Too Low😧';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game😥';
      displayMessage('You lost the game😥');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High😧';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game😥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low😧';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game😥';
  //     document.querySelector('.score').textContent = 0;
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
