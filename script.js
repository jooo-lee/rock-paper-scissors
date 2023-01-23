let playerCounter;
let computerCounter;

const choices = ["rock", "paper", "scissors"];

const map = new Map();
map.set("rock", "🪨");
map.set("paper", "📄");
map.set("scissors", "✂️");

display("#player-choice", "⚔️");
display("#computer-choice", "⚔️");
display("#player-score", "Score: 0");
display("#computer-score", "Score: 0");

function playRound(e) {
    let playerChoice = e.target.dataset.choice;
    let computerChoice = getComputerChoice();

    if (playerChoice === "rock" && computerChoice === "scissors" || 
    playerChoice === "scissors" && computerChoice === "paper" ||
    playerChoice === "paper" && computerChoice === "rock") {
        playerCounter++;
    } else if (playerChoice === "rock" && computerChoice === "paper" ||
    playerChoice === "scissors" && computerChoice === "rock" ||
    playerChoice === "paper" && computerChoice === "scissors") {
        computerCounter++;
    }
    
    display("#player-choice", `${map.get(playerChoice)}`);
    display("#computer-choice", `${map.get(computerChoice)}`);

    display("#player-score", `Score: ${playerCounter}`);
    display("#computer-score", `Score: ${computerCounter}`);

    // Game ends when one player reaches 5 points
    if (playerCounter === 5 || computerCounter === 5) {
        let winner = (playerCounter === 5) ? "Player" : "Computer";
        gameOver(winner);
    }
}

function gameOver(winner) {
    display("#winner", `${winner}`);
    const playerBtns = document.querySelectorAll(".player-btns");
    // Stop player from continuing game
    playerBtns.forEach(btn => btn.removeEventListener("click", playRound));
    playerBtns.forEach(btn => btn.removeEventListener("click", playSound));
    display("#player-choice", "GAME OVER");
    display("#computer-choice", "GAME OVER");
}

function game() {
    playerCounter = 0;
    computerCounter = 0;

    const playerBtns = document.querySelectorAll(".player-btns");
    playerBtns.forEach(btn => btn.addEventListener("click", playRound));
    playerBtns.forEach(btn => btn.addEventListener("click", playSound));
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

function playSound(e) {
    const audio = document.querySelector("#btn-click");
    audio.currentTime = 0;
    audio.play();
}