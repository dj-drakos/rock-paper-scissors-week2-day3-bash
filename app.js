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
const drawOutput = document.querySelector('#drawOutput'); 
const compWinsOutput = document.querySelector('#compWinsOutput'); 
const winPercentagesOutput = document.querySelector('#winPercentagesOutput'); 
const totalResetTimes = document.querySelector('#totalResetTimes'); 


// console.log(paper);

let winningTotalCounts = 0; 
let lossCounts = 0; 
let drawCounts = 0;
let gameTimes = 0; 
let resetTimes = 0; 


clickButton.addEventListener('click', () => {
    gameTimes++; 
    const result = trackUsersWinsAndLosses(userGuessesFunc(), computerGuessesFunc()); 
    outputDisplay(result); 
});


resetButton.addEventListener('click', () => {
    resetTimes++; 
    resetFunc(); 
});


















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



function outputDisplay(res) {
    totalResetTimes.innerHTML = resetTimes; 
    if (res === 'userWins') {
        winningTotalCounts++; 
        userWinningNumberDisplay.innerHTML = winningTotalCounts; 
    } else if (res === 'draw') {
        drawCounts++; 
        drawOutput.innerHTML = drawCounts;
    } else {
        lossCounts++; 
        compWinsOutput.innerHTML = lossCounts;
    }
    winPercentagesOutput.innerHTML = `${Math.floor(winningTotalCounts / gameTimes * 100)} %`;
   
}



// this is the reset for the reset button and the function stays inside of the reset addEventListener
function resetFunc() {
   
    let winningTotalCounts = 0; 
    let lossCounts = 0; 
    let drawCounts = 0;
    let gameTimes = 0; 

    userWinningNumberDisplay.innerHTML = ''; 
    drawOutput.innerHTML = '';
    compWinsOutput.innerHTML = '';
    winPercentagesOutput.innerHTML = ''; 
}
