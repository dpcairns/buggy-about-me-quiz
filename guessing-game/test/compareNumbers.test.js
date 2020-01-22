// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compareNumbers.js';
const test = QUnit.test;

test('guess was correct', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 13;
    const correctNumber = 13;
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('guess was too high', function(assert) {
    const guess = 17;
    const correctNumber = 13;
    const expected = 1;
    const result = compareNumbers(guess, correctNumber);
    assert.equal(result, expected);
});

test('guess was too low', function(assert) {
    const guess = 1;
    const correctNumber = 13;
    const expected = -1;
    const result = compareNumbers(guess, correctNumber);
    assert.equal(result, expected);
});