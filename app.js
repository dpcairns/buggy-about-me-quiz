import compareNumbers from './compareNumbers.js'

const button = document.getElementById('button');
const guessesRemaining = document.getElementById('guessesRemaining');
const winLose = document.getElementById('winLose');
const lose = 'You ran out of guesses. You lose.';
let count = 4;

// function carried out on click. Needs to 1. Reduce counter; 2. Test the number; 3. Show result
button.addEventListener('click', () => {
    console.log('Button works!');
    compareNumbers();
    count--;
    guessesRemaining.textContent = count;
    if (count === 0) {
        winLose.textContent = lose;
    }
})