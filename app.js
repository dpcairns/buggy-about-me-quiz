// import isYes function
import isYes from './is-yes.js';

// define variables
const takeQuiz = document.getElementById('takeQuiz');
const total = document.getElementById('total');

// function for Take Quiz button
takeQuiz.eventListener('click', () => {
    const userName = prompt('Enough about me. What is your name?');
    const confirmation = confirm(`${name}, would you like to take a short quiz?`);
    if (confirmation === false) return; 
    const form = prompt('Enough about you. Is Mittens from Minnesota?');
    const likes = prompt = 'Does Mittens like to go dancing?';
    const bones = prompt('Has Mittens broken her back?');
    let count = 0;
    if (!isYes(from)) count++;
    if (!isYes(likes)) count++;
    if (isYes(bones)) count++;
    total.text = `Congratulations ${name}, you got ${count} answers correct!`;
    scoreStyle(count);
});

//stretch goal; make page display differently based on good/bad scores
function scoreStyle(count) {
    if (count > 2) {
        total.backgroundColor() = 'yellow';
    } else {
        total.style.backgroundColor = 'purple';
        total.color() = 'white';
    }
}