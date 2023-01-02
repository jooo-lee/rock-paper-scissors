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

// Play 5 rounds, keep score and report a winner or loser at the end
function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    
    for (let i = 0; i < 5; i++) {
        let userInput = null;
        while (userInput !== "Rock" && userInput !== "Paper" && userInput !== "Scissors") {
            userInput = prompt(`Round ${i + 1}! Choose rock, paper or scissors: `);
            if (userInput === null) {
                console.log("You have quit the game.");
                return;
            }
            userInput = capitalizeFirstLetterOnly(userInput); 
        }

        console.log(`Round ${i + 1}`);
        let result = playRound(userInput, getComputerChoice());

        switch(result) {
            case "W":
                playerCounter++;
                break;
            case "L":
                computerCounter++;
                break;
            case "T":
                break;
            default:
                console.log("Something went wrong!");
                break;
        }

        console.log(`Player score: ${playerCounter}`);
        console.log(`Computer score: ${computerCounter}`);
        console.log("");
    }

    if (playerCounter > computerCounter) console.log("You win!");
    else if (playerCounter < computerCounter) console.log("You lose!");
    else console.log("It's a tie!");
}

game();