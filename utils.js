


// eslint-disable-next-line no-unused-vars
export function trackUsersWinsAndLosses(userGuess, computerGuess) {
    if (   
        // eslint-disable-next-line no-constant-condition
        userGuess === 'rock' && computerGuess === 'scissors' 
        ||
        userGuess === 'scissors' && computerGuess === 'paper' 
        ||
        userGuess === 'paper' && computerGuess === 'rock'
    ) {
        return 'userWins'; 
    } 
    else if (
        userGuess === computerGuess
    ) {
        return 'draw'; 
    } 
    else {
        return 'computerWins'; 
    }
}

export function computerGuessesFunc(options, randomNum) {
    if (
        options === 'rock' && randomNum === 1 
    ) {
        return 'r'; 
    } else if (
        randomNum === 2 && options === 'paper'
    ) {
        return 'p'; 
    } else if (
        randomNum === 3 && options === 'scissors'
    ){
        return 's'; 
    }
}