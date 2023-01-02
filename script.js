const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * choices.length);
    return choices[randInt];
}

// Capitalize first letter of string and have the rest be lowercase
function capitalizeFirstLetterOnly(string) {
    let lowerCaseString = string.toLowerCase();
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
}

// Play a single round of RPS
function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = capitalizeFirstLetterOnly(playerSelection);
    
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    // If choices are the same then it's a tie
    if (playerSelection === computerSelection) return "T";

    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock") {
            // Player wins
            // return `You win! ${playerSelection} beats ${computerSelection}!`;
            return "W";
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
               playerSelection === "Scissors" && computerSelection === "Rock" ||
               playerSelection === "Paper" && computerSelection === "Scissors") {
            // Player loses
            // return `You lose! ${computerSelection} beats ${playerSelection}!`;
            return "L";
    }
}

// Play a 5 round game that keeps score and reports a winner or loser at the end
function game() {
    // Initialize score counters for player and computer
    let playerCounter = 0;
    let computerCounter = 0;
    
    for (let i = 0; i < 5; i++) {
        // Prompt user for input and make sure it's valid
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

        // Increase score
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

    // Compare scores and console.log winner
    if (playerCounter > computerCounter) console.log("You win!");
    else if (playerCounter < computerCounter) console.log("You lose!");
    else console.log("It's a tie!");
}

game();