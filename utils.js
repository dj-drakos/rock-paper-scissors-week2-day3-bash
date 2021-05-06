


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