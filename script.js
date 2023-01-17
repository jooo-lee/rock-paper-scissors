// display results
// 1. create div that shows result of round - DONE
// 2. display running score
// 3. display winner when 5 points reached by one side
const playerChoiceParagraph = document.querySelector("#player-choice");
const computerChoiceParagraph = document.querySelector("#computer-choice");
const resultParagraph = document.querySelector("#result");

const choiceBtns = document.querySelectorAll(".choice-btns");
choiceBtns.forEach(btn => btn.addEventListener("click", playRound));

function playRound(e) {
    let playerChoice = e.target.dataset.choice;
    let computerChoice = getComputerChoice();

    playerChoiceParagraph.textContent = `Player chose: ${playerChoice}`;
    computerChoiceParagraph.textContent = `Computer chose: ${computerChoice}`;

    if (playerChoice === computerChoice) resultParagraph.textContent = "T";

    if (playerChoice === "rock" && computerChoice === "scissors" || 
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock") {
            resultParagraph.textContent = "W";
    } else if (playerChoice === "rock" && computerChoice === "paper" ||
               playerChoice === "scissors" && computerChoice === "rock" ||
               playerChoice === "paper" && computerChoice === "scissors") {
                resultParagraph.textContent = "L";
    }
}

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * choices.length);
    return choices[randInt];
}

function game() {
    let playerCounter = 0;
    let computerCounter = 0;

    // let result = playRound(userInput, getComputerChoice());

    // switch(result) {
    //     case "W":
    //         playerCounter++;
    //         break;
    //     case "L":
    //         computerCounter++;
    //         break;
    //     case "T":
    //         break;
    //     default:
    //         console.log("Something went wrong!");
    //         break;
    // }

    // console.log(`Player score: ${playerCounter}`);
    // console.log(`Computer score: ${computerCounter}`);
    // console.log("");

    // if (playerCounter > computerCounter) console.log("You win!");
    // else if (playerCounter < computerCounter) console.log("You lose!");
    // else console.log("It's a tie!");
}

// game();