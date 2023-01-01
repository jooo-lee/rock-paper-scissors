const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * choices.length);
    return choices[randInt];
}

// play a single round of RPS
function playRound(playerSelection, computerSelection) {
    // compare playerSelection with computerSelection
    // if selections are equal => tie
    // else compare:
    //      (player = rock, comp = scissors) || (player = scissors, comp = paper) || 
    //         (player = paper, comp = rock) => player wins
    //      (player = rock, comp = paper) || (player = scissors, comp = rock) ||
    //         (player = paper, comp = scissors) => player loses
    // return result of round as a string
}

// For testing later on
// const playerSelection = "Rock";
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));