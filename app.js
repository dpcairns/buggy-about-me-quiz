const button = document.getElementById('button');
const guessesRemaining = document.getElementById('guessesRemaining');
let userNumber = document.getElementById('userNumber');
const correctNumber = 13;
let count = 4;

// function to compare correctNumber to userNumber
function compareNumbers() {
    if (userNumber === correctNumber) {
        return 'Congratulations! You guessed the number!';
    } else if (userNumber > correctNumber) {
        return 'Your guess was too high--try again!';
    } else if (userNumber < correctNumber) {
        return 'Your guess was too low--try again!';
    }
};

// function carried out on click. Needs to 1. Reduce counter; 2. Test the number; 3. Show result
button.addEventListener('click', () => {
    console.log('Button works!');
    count--;
    compareNumbers();
    guessesRemaining.textContent = count;
})