const playerChoices = document.querySelectorAll(".player-choice");
playerChoices.forEach(btn => btn.addEventListener("click", playRound));

function playRound(e) {
    let playerChoice = capitalizeFirstLetterOnly(e.target.dataset.choice);
    let computerChoice = getComputerChoice();
    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (playerChoice === computerChoice) console.log("T");

    if (playerChoice === "Rock" && computerChoice === "Scissors" || 
        playerChoice === "Scissors" && computerChoice === "Paper" ||
        playerChoice === "Paper" && computerChoice === "Rock") {
            console.log("W");
    } else if (playerChoice === "Rock" && computerChoice === "Paper" ||
               playerChoice === "Scissors" && computerChoice === "Rock" ||
               playerChoice === "Paper" && computerChoice === "Scissors") {
            console.log("L");
    }
}





const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * choices.length);
    return choices[randInt];
}

function capitalizeFirstLetterOnly(string) {
    let lowerCaseString = string.toLowerCase();
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
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