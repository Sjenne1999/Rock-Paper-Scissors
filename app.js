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
        console.log("Round lost! Remember if you you lose you die!!!");
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWin++;
        console.log("You're kicking their butt! Keep going!");
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerWin++;
        console.log("Noooo, you can not die today!!!");
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWin++;
        console.log('Keep winning!!!');
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerWin++;
        console.log("Don't die!!!");
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWin++;
        console.log('Keep winning or it could be your last');
    }
    else if (playerSelection === computerSelection) {
        console.log('Draw!!!');
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
        let computerSelection = computerPlay();
        gameRound (playerSelection, computerSelection);
    }
    if (playerWin > computerWin) {
        console.log('You won! Time for the next game!');
    }
    else console.log('You are dead');
}

game();