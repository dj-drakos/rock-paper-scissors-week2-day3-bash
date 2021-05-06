// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { trackUsersWinsAndLosses } from './utils.js'; 


//user imports
const paper = document.querySelector('#paper'); 
const rock = document.querySelector('#rock'); 
const scissors = document.querySelector('#scissors'); 

//buttons
const clickButton = document.querySelector('#clickBtn'); 
const resetButton = document.querySelector('#resetBtn'); 

//display HTML elements 
const userWinningNumberDisplay = document.querySelector('#userWinsOutput'); 

// console.log(paper);

let winningTotalCounts  = 0; 
let lossCounts = 0; 
let drawCounts = 0;
let gameTimes = 0; 

// user input and storage
const userGuessedArray = []; 
function userGuessesFunc() {
    if (paper.checked) {
        userGuessedArray.push(paper.value);
    } else if (rock.checked) {
        userGuessedArray.push(rock.value);
    } else {
        userGuessedArray.push(scissors.value);
    }
    return userGuessedArray[userGuessedArray.length - 1]; 
}

// console.log(userGuessArray);
// userGuessesFunc();

const computerGuessedArray = []; 
function computerGuessesFunc() {
    const options = ['rock', 'paper', 'scissors'];  
    const randomNum = Math.floor(Math.random() * 3) ; 
    computerGuessedArray.push(options[randomNum]); 
    return computerGuessedArray[computerGuessedArray.length - 1]; 
}

clickButton.addEventListener('click', () => {
    const result = trackUsersWinsAndLosses(userGuessesFunc(), computerGuessesFunc()); 
    console.log(result)
});