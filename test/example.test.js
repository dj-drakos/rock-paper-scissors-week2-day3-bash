// IMPORT MODULES under test here:
import { trackUsersWinsAndLosses } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'userWins';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = trackUsersWinsAndLosses('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'computerWins';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = trackUsersWinsAndLosses('paper', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = trackUsersWinsAndLosses('paper', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


