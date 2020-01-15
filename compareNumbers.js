// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, false);
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