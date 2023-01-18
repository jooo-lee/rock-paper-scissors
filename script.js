// also need to think about structure, maybe want to have playRound somehow "inside" of game()? along with score counters
// so i can also reset game 

// display results
// 1. create div that shows result of round - DONE
// 2. display running score - DONE
// 3. display winner when 5 points reached by one side
let playerCounter = 0;
let computerCounter = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * choices.length);
    return choices[randInt];
}

const choiceBtns = document.querySelectorAll(".choice-btns");
choiceBtns.forEach(btn => btn.addEventListener("click", playRound));

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
}

function display(paragraphID, text) {
    document.querySelector(paragraphID).textContent = text;
}

function game() {
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