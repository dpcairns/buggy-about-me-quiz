const guessesRemaining = document.getElementById('guessesRemaining');
let userNumber = document.getElementById('userNumber');

const correctNumber = 13;
let count = 4;

// function to compare correctNumber to userNumber
compareNumbers() => {
    if userNumber === correctNumber {
        return 'Congratulations! You guessed the number!'
    } else if userNumber > correctNumber {
        return 'Your guess was too high--try again!'
    } else if userNumber < correctNumber {
        'Your guess was too low--try again!'
    }
};

// function carried out on click. Needs to 1. Reduce counter; 2. Test the number; 3. Show result
addEventListener('click', () => {
    count--;
})







guessesRemaining.textContent = count