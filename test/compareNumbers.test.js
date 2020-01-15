// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compareNumbers'
const test = QUnit.test;

test('13 should return 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 13;
    const correctNumber = 13;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});

// We will need to know whether the user's guess is correct, too low, or too high.

//TDD a compareNumbers function that:

//Has two parameters: guess and correctNumber
//Returns one of the following values:
//0 - the numbers are identical
//-1 - the guessed number is too low
//1 - the guessed number is too high
//Write one test at a time, each test should address one of the three possible outcomes.

//You can assume valid input, meaning the passed input will always be a number.

//SUPER STRETCH: Actually test for invalid input. You should throw an error if either parameter is not a number. Consult the QUnit docs for how to test for an exception.