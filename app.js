import { trackUsersWinsAndLosses } from './utils.js'; 
// import { computerGuessesFunc } from  './utils.js'; 

//Caching the DOM
const paper = document.querySelector('#paper'); 
const rock = document.querySelector('#rock'); 
const scissors = document.querySelector('#scissors'); 

//buttons
const clickButton = document.querySelector('#clickBtn'); 
const resetButton = document.querySelector('#resetBtn'); 

//display HTML elements 
// const messageDisplay = document.querySelector('#messageDisplay'); 
const userWinningNumberDisplay = document.querySelector('#userWinsOutput'); 
const drawOutput = document.querySelector('#drawOutput'); 
const compWinsOutput = document.querySelector('#compWinsOutput'); 
const winPercentagesOutput = document.querySelector('#winPercentagesOutput'); 
const totalResetTimes = document.querySelector('#totalResetTimes'); 


let winningTotalCounts = 0; 
let lossCounts = 0; 
let drawCounts = 0;
let gameTimes = 0; 
let winPercentages = 0; 
let resetTimes = 0; 

clickButton.addEventListener('click', () => {
    gameTimes++; 
    const result = trackUsersWinsAndLosses(userGuessesFunc(), computerGuessesFunc()); 
    outputDisplay(result); 
});

resetButton.addEventListener('click', () => {
    resetTimes++; 
    resetFunc(); 
    totalResetTimes.innerHTML = resetTimes;
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
    // return userGuessedArray[userGuessedArray.length - 1]; 
    return userGuessedArray.shift(); 
}


const computerGuessedArray = []; 
function computerGuessesFunc() {
    const options = ['rock', 'paper', 'scissors'];  
    const randomNum = Math.floor(Math.random() * 3) ; 
    computerGuessedArray.push(options[randomNum]); 
    return computerGuessedArray.shift(); 
    // return computerGuessedArray[computerGuessedArray.length - 1]; 
}


function outputDisplay(res) {
    if (res === 'userWins') {
        winningTotalCounts++; 
        userWinningNumberDisplay.innerHTML = winningTotalCounts; 

        // winIcon(); 
    } else if (res === 'draw') {
        drawCounts++; 
        drawOutput.innerHTML = drawCounts;
    } else {
        lossCounts++; 
        compWinsOutput.innerHTML = lossCounts;
    }
    winPercentagesOutput.innerHTML = `${Math.floor(winningTotalCounts / gameTimes * 100)} %`;
}

// function winIcon() {
//     const pTag = document.createElement('p'); 
//     // eslint-disable-next-line no-undef
//     pTag.innerHTML = "<i class='fas fa-trophy'></i>"; 
//     winningTotalCounts.appendChild(pTag);
// }


// this is the reset for the reset button and the function stays inside of the reset addEventListener
function resetFunc() {
    winningTotalCounts = 0; 
    lossCounts = 0; 
    drawCounts = 0;
    gameTimes = 0; 
    winPercentages = 0 + '%'; 

    userWinningNumberDisplay.innerHTML = winningTotalCounts; 
    drawOutput.innerHTML = drawCounts;
    compWinsOutput.innerHTML = lossCounts;
    winPercentagesOutput.innerHTML = winPercentages;
}
