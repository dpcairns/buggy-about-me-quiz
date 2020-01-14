// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isYes from "../isyes.js";
const test = QUnit.test;

test('Yes should return true', function(assert) {  
    //Arrange
    // Set up your parameters and expectations
    const input = "Yes";
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(input);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);

    // this is what I attempted first. is there a way to test it like this? 
    // assert.equal('yes', true);
});

test('no should return false', function(assert) {
    const input = 'no';
    const expected = false;
    const result = isYes(input);
    assert.equal(result, expected);
})

test('Meh should return false', assert => {
    const input = 'Meh';
    const expected = false;
    const result = isYes(input);
    assert.equal(result, expected);
})
