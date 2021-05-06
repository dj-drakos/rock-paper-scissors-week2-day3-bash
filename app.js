// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { trackUsersWinsAndLosses } from './utils.js'; 

const paper = document.querySelector('#paper').value; 
const rock = document.querySelector('#rock').value; 
const scissors = document.querySelector('#scissors').value; 

const clickButton = document.querySelector('#clickBtn'); 
const resetButton = document.querySelector('#resetBtn'); 

let winCoutns  = 0; 
let lossCounts = 0; 
let drawCounts = 0;
let gameTimes = 0; 




clickButton.addEventListener('click', trackUsersWinsAndLosses()) ;