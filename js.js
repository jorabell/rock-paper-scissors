const scoreDisplayElement = document.getElementById('score-display');
const resultElement = document.getElementById('result');
const rockElement = document.getElementById('rock');
const paperElement = document.getElementById('paper');
const scissorsElement = document.getElementById('scissors');
const playGameElement = document.getElementById('play-game');
const selectionsDivElement = document.querySelector('.selections');
const resultDivElement = document.querySelector('.result');
const scoreDivElement = document.querySelector('.score');
const instructionsDivElement = document.querySelector('.instructions');
const announcementElement = document.querySelector('.announcement');

rockElement.addEventListener("click", selectRock);
paperElement.addEventListener("click", selectPaper);
scissorsElement.addEventListener("click", selectScissors);
playGameElement.addEventListener("click", setup);

const WIN_CONDITION = 5;
let playerScore;
let computerScore;

scoreDivElement.style.display = 'none';
resultDivElement.style.display = 'none';
selectionsDivElement.style.display = 'none';
announcementElement.style.display = 'none';

function setup() {
    scoreDivElement.style.display = 'inline';
    resultDivElement.style.display = 'inline';
    selectionsDivElement.style.display = 'inline-flex';
    playGameElement.style.display = 'none';
    instructionsDivElement.style.display = 'none';
    announcementElement.style.display = 'none';
    resultElement.textContent = 'Get ready...';
    playerScore = 0;
    computerScore = 0;
    updateScore();
}

function selectRock() {
    console.log('Player chose Rock.');
    playRound('Rock');
}

function selectPaper() {
    console.log('Player chose Paper.');
    playRound('Paper');
}

function selectScissors() {
    console.log('Player chose Scissors.');
    playRound('Scissors');
}

function playRound(playerSelection) {
    let computerSelection = getComputerSelection();
    switch(playerSelection) {
        case('Rock'):
            switch(computerSelection) {
                case('Rock'):
                    tie(playerSelection, computerSelection);
                    break;
                case('Paper'):
                    lose(playerSelection, computerSelection);
                    break;
                case('Scissors'):
                    win(playerSelection, computerSelection);
                    break;
            }
            break;
        case('Paper'):
            switch(computerSelection) {
                case('Rock'):
                    win(playerSelection, computerSelection);
                    break;
                case('Paper'):
                    tie(playerSelection, computerSelection);
                    break;
                case('Scissors'):
                    lose(playerSelection, computerSelection);
                    break;
            }
            break;
        case('Scissors'):
            switch(computerSelection) {
                case('Rock'):
                    lose(playerSelection, computerSelection);
                    break;
                case('Paper'):
                    win(playerSelection, computerSelection);
                    break;
                case('Scissors'):
                    tie(playerSelection, computerSelection);
                    break;
            }
            break;
    }
}

function getComputerSelection() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            console.log("Computer chose Rock.")
            return "Rock";
        case 1:
            console.log("Computer chose Paper.")
            return "Paper";
        case 2:
            console.log("Computer chose Scissors.")
            return "Scissors";
    }
}

function win(playerSelection, computerSelection) {
    console.log("Win");
    resultElement.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    playerScore += 1;
    updateScore();
    checkForWinner();
}

function lose(playerSelection, computerSelection) {
    console.log("Lose");
    resultElement.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}.`;
    computerScore += 1;
    updateScore();
    checkForWinner();
}

function tie(playerSelection, computerSelection) {
    resultElement.textContent = `Tie! You both selected ${playerSelection}.`;

    console.log("Tie");
}

function updateScore() {
    scoreDisplayElement.textContent = `${playerScore} : ${computerScore}`;
}

function checkForWinner() {
    if (playerScore >= 5) {
        playerWins();
    } else if (computerScore >= 5) {
        computerWins();
    }
}

function playerWins() {
    announcementElement.textContent = "PLAYER WINS THE GAME!";
    announcementElement.style.display = 'inline';
    selectionsDivElement.style.display = 'none';
    playGameElement.style.display = 'grid';
}

function computerWins() {
    announcementElement.textContent = "COMPUTER WINS THE GAME!";
    announcementElement.style.display = 'inline';
    selectionsDivElement.style.display = 'none';
    playGameElement.style.display = 'grid';
}

// function playerInput() {
//     playerSelection = prompt("Choose: Rock, Paper, or Scissors?");
//     playerSelection = playerSelection.toLowerCase();
//     return playerSelection;
// }

// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound(playerInput(), computerPlay()));
//     }
// }