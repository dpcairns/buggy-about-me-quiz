export default compareNumbers;

const numRel = document.getElementById('numRel');
const winLose = document.getElementById('winLose');
const userNumber = document.getElementById('userNumber');
const correctNumber = 13;
const win = 'Congratulations! You guessed the number!';
const tooHigh = 'Your guess was too high--try again!';
const tooLow = 'Your guess was too low--try again!';

function compareNumbers() {
    if (userNumber === correctNumber) {
        winLose.textContent = win;
    } else if (userNumber > correctNumber) {
        numRel.textContent = tooHigh;
    } else if (userNumber < correctNumber) {
        numRel.textContent = tooLow;
    }
};
