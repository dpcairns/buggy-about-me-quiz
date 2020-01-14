// import isYes function
import isYes from './isyes.js';

// define variables
const takeQuiz = document.getElementById('takeQuiz');
const total = document.getElementById('total');

// function for Take Quiz button
takeQuiz.addEventListener('click', () => {
    console.log('Button works!');
    const name = prompt('Enough about me. What is your name?');
    const confirmation = confirm(`${name}, would you like to take a short quiz?`);
    if (confirmation === false) return; 
    const from = prompt('Enough about you. Is Chelsea from Minnesota?');
    const likes = prompt('Does Chelsea like to party?');
    const bones = prompt('Has Chelsea broken her back?');
    let count = 0;
    if (!isYes(from)) count++;
    if (!isYes(likes)) count++;
    if (isYes(bones)) count++;
    total.textContent = `Congratulations ${name}, you got ${count} answers correct!`;
    scoreStyle(count);
});

//stretch goal; make page display differently based on good/bad scores
function scoreStyle(count) {
    const total = document.getElementById('total');
    if (count > 2) {
        total.style.backgroundColor = 'yellow';
    } else {
        total.style.backgroundColor = 'purple';
        total.style.color = 'white'
    }
};