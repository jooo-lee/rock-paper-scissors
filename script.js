// First make it so that when either the rock, paper or scissors btn
// is pressed, that specific choice is logged to the console

const playerChoices = document.querySelectorAll(".player-choice");
playerChoices.forEach(btn => btn.addEventListener("click", () => {
    console.log(btn.dataset.choice);
}));





const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * choices.length);
    return choices[randInt];
}

function capitalizeFirstLetterOnly(string) {
    let lowerCaseString = string.toLowerCase();
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
}

function playRound(playerSelection, computerSelection) {
    // Make player input case-insensitive
    playerSelection = capitalizeFirstLetterOnly(playerSelection);
    
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    if (playerSelection === computerSelection) return "T";

    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock") {
            return "W";
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
               playerSelection === "Scissors" && computerSelection === "Rock" ||
               playerSelection === "Paper" && computerSelection === "Scissors") {
            return "L";
    }
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