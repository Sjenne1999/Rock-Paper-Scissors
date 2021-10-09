let playerWin = 0;
let computerWin = 0;

function computerPlay () {
    switch (
        Math.floor(Math.random() * 3)){
            case 0: 
            return 'rock';
            case 1: 
            return 'paper';
            case 2:
            return 'scissors';
            default: alert('Something went wrong');
        }
}

function gameRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerWin++;
        console.log("You're a Loser!!!");
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWin++;
        console.log("You're kicking their butt! Keep going!");
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerWin++;
        console.log("You're such a dissapointment!!!");
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWin++;
        console.log('Keep winning!!!');
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerWin++;
        console.log('Man you suck!!!');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWin++;
        console.log('Keep winning or you will be sorry');
    }
    else if (playerSelection === computerSelection) {
        console.log('How are you not smarter than a computer?');
    }
    else {
        console.log('You selected an invalid weapon');
    }
    let score = [playerSelection, computerSelection]
    return score;
}

function game () {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose your battle weapon: ROCK, PAPER, SCISSORS');
        gameRound (playerSelection, computerSelection);
    }
    if (playerWin > computerWin) {
        console.log('You won! Play again!');
    }
    else console.log('How can you not beat a computer!');
}

const computerSelection = computerPlay();
game();
