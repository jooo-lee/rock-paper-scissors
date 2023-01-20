let playerCounter;
let computerCounter;

const choices = ["rock", "paper", "scissors"];

display("#player-choice", "Player chose: ");
display("#computer-choice", "Computer chose: ");
display("#player-score", "Player score: ");
display("#computer-score", "Computer score: ");
display("#winner", "Winner: ");

function playRound(e) {
    let playerChoice = e.target.dataset.choice;
    let computerChoice = getComputerChoice();

    display("#player-choice", `Player chose: ${playerChoice}`);
    display("#computer-choice", `Computer chose: ${computerChoice}`);

    if (playerChoice === "rock" && computerChoice === "scissors" || 
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock") {
            playerCounter++;
    } else if (playerChoice === "rock" && computerChoice === "paper" ||
               playerChoice === "scissors" && computerChoice === "rock" ||
               playerChoice === "paper" && computerChoice === "scissors") {
                computerCounter++;
    }

    display("#player-score", `Player score: ${playerCounter}`);
    display("#computer-score", `Computer score: ${computerCounter}`);

    // Game ends when one player reaches 5 points
    if (playerCounter === 5 || computerCounter === 5) {
        let winner = (playerCounter === 5) ? "Player" : "Computer";
        gameOver(winner);
    }
}

function gameOver(winner) {
    display("#winner", `Winner is: ${winner}!`);
    const playerBtns = document.querySelectorAll(".player-btns");
    // Stop player from continuing game
    playerBtns.forEach(btn => btn.removeEventListener("click", playRound));
}

function game() {
    playerCounter = 0;
    computerCounter = 0;

    const playerBtns = document.querySelectorAll(".player-btns");
    playerBtns.forEach(btn => btn.addEventListener("click", playRound));
}

game();

// Below are helper functions
function getComputerChoice() {
    let randInt = Math.floor(Math.random() * choices.length);
    return choices[randInt];
}

function display(paragraphID, text) {
    document.querySelector(paragraphID).textContent = text;
}