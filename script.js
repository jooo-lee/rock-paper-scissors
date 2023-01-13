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

// function playRound(playerChoice, computerChoice) {
//     // Make player input case-insensitive
//     playerChoice = capitalizeFirstLetterOnly(playerChoice);
    
//     console.log(`Player chose: ${playerChoice}`);
//     console.log(`Computer chose: ${computerChoice}`);

//     if (playerChoice === computerChoice) return "T";

//     if (playerChoice === "Rock" && computerChoice === "Scissors" || 
//         playerChoice === "Scissors" && computerChoice === "Paper" ||
//         playerChoice === "Paper" && computerChoice === "Rock") {
//             return "W";
//     } else if (playerChoice === "Rock" && computerChoice === "Paper" ||
//                playerChoice === "Scissors" && computerChoice === "Rock" ||
//                playerChoice === "Paper" && computerChoice === "Scissors") {
//             return "L";
//     }
// }

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