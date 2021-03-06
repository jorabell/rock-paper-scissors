function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            console.log("Computer chose rock.")
            return "Rock";
        case 1:
            console.log("Computer chose paper.")
            return "Paper";
        case 2:
            console.log("Computer chose scissors.")
            return "Scissors";
        default:
            alert("Error in computerPlay function!");
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player chose ${playerSelection}.`)
    switch(playerSelection) {
        case('rock'):
            switch(computerSelection) {
                case('Rock'):
                    return "Tie! Rock vs. Rock.";
                case('Paper'):
                    return "You Lose! Paper beats Rock.";
                case('Scissors'):
                    return "You Win! Rock beats Scissors.";
            }
        case('paper'):
            switch(computerSelection) {
                case('Rock'):
                    return "You Win! Paper beats Rock.";
                case('Paper'):
                    return "Tie! Paper vs Paper.";
                case('Scissors'):
                    return "You Lose! Scissors beats Paper.";
            }
        case('scissors'):
            switch(computerSelection) {
                case('Rock'):
                    return "You Lose! Rock beats Scissors.";
                case('Paper'):
                    return "You Win! Scissors beats Paper.";
                case('Scissors'):
                    return "Tie! Scissors vs. Scissors.";
            }
    }
}

function playerInput() {
    playerSelection = prompt("Choose: Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerInput(), computerPlay()));
    }
}