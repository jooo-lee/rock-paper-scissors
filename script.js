const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * choices.length);
    return choices[randInt];
}

// Play a single round of RPS
function playRound(playerSelection, computerSelection) {
    // If choices are the same then it's a tie
    if (playerSelection === computerSelection) return "It's a tie!";

    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock") {
            // Player wins
            return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
               playerSelection === "Scissors" && computerSelection === "Rock" ||
               playerSelection === "Paper" && computerSelection === "Scissors") {
            // Player loses
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

// Testing
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));