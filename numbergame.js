'script mode';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighscore = 0;
//document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'NO MESSAGE';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Your guess is correct';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    /*document.querySelector('.score').textcontent = score;*/
    if (score > heighscore) {
      heighscore = score;
      document.querySelector('.highscore').textContent = heighscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over';
      document.querySelector('.score').textContent = '0';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
