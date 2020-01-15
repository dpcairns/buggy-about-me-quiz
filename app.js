import compareNumbers from './compareNumbers.js'

const button = document.getElementById('button');
const guessesRemaining = document.getElementById('guessesRemaining');
const winLose = document.getElementById('winLose');
const lose = 'You ran out of guesses. You lose.';
let count = 4;
const numRel = document.getElementById('numRel');
const win = 'Congratulations! You guessed the number!';
const tooHigh = 'Your guess was too high--try again!';
const tooLow = 'Your guess was too low--try again!';
const correctNumber = 13;

button.addEventListener('click', () => {
    const userNumber = +document.getElementById('userNumber').value;
    count--;
    numRel.textContent = '';
    winLose.textContent = '';
    const result = compareNumbers(userNumber, correctNumber);
    console.log(result);
    guessesRemaining.textContent = count;
    if (count === 0 && compareNumbers(userNumber, correctNumber) !== 0) {
        winLose.textContent = lose;
    };
    if (compareNumbers(userNumber, correctNumber) === 0) {
        winLose.textContent = win;
    } else if (compareNumbers(userNumber, correctNumber) === 1) {
        numRel.textContent = tooHigh;
    } else if (compareNumbers(userNumber, correctNumber) === -1) {
        numRel.textContent = tooLow;
    };
})