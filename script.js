let playerCounter;
let computerCounter;

const choices = ["rock", "paper", "scissors"];

function playRound(e) {
    let playerChoice = e.target.dataset.choice;
    let computerChoice = getComputerChoice();

    display("#player-choice", `Player chose: ${playerChoice}`);
    display("#computer-choice", `Computer chose: ${computerChoice}`)

    if (playerChoice === computerChoice) display("#result", "T");

    if (playerChoice === "rock" && computerChoice === "scissors" || 
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock") {
            playerCounter++;
            display("#result", "W");
    } else if (playerChoice === "rock" && computerChoice === "paper" ||
               playerChoice === "scissors" && computerChoice === "rock" ||
               playerChoice === "paper" && computerChoice === "scissors") {
                computerCounter++;
                display("#result", "L");
    }

    display("#player-score", `Player score: ${playerCounter}`);
    display("#computer-score", `Computer score: ${computerCounter}`);

    if (playerCounter === 5 || computerCounter === 5) {
        let winner = (playerCounter === 5) ? "Player" : "Computer";
        gameOver(winner);
    }
}

function gameOver(winner) {
    display("#winner", `Winner is: ${winner}!`);
    const choiceBtns = document.querySelectorAll(".choice-btns");
    choiceBtns.forEach(btn => btn.removeEventListener("click", playRound));
}

function game() {
    playerCounter = 0;
    computerCounter = 0;

    const choiceBtns = document.querySelectorAll(".choice-btns");
    choiceBtns.forEach(btn => btn.addEventListener("click", playRound));
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