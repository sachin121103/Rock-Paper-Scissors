function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[getRandomInt(3)];
}

function getPlayerChoice() {
    choice = prompt("Enter Rock, Paper or Scissors: ");
    return choice;
}

let humanScore = 0;
let compScore = 0;

function playRound() {
    humanChoice = getPlayerChoice().toLowerCase();
    compChoice = getComputerChoice();

    console.log(compChoice);
    console.log(humanChoice);
    if (humanChoice == 'rock') {
        switch (compChoice) {
            case 'paper':
                console.log("You lose, Paper beats Rock");
                compScore += 1;
                break;
            
            case 'scissors':
                console.log("You win, Rock beats Scissors");
                humanScore += 1;
                break;   
                
            case 'rock':
                console.log("You both chose Rock. No winner!");
                break;

            default:
                break;
        }
    }

    if (humanChoice == 'paper') {
        switch (compChoice) {
            case 'paper':
                console.log("You both chose Paper. No winner!");
                break;
            
            case 'scissors':
                console.log("You lose, Scissors beats Paper");
                compScore += 1;
                break;   
                
            case 'rock':
                console.log("You win, Paper beats Rock");
                humanScore += 1;
                break;

            default:
                break;
        }
    }

    if (humanChoice == 'scissors') {
        switch (compChoice) {
            case 'paper':
                console.log("You win, Scissors beats Paper");
                humanScore += 1;
                break;
            
            case 'scissors':
                console.log("You both chose Scissors. No winner!");
                break;   
                
            case 'rock':
                console.log("You lose, Rock beats Scissors");
                compScore += 1;
                break;

            default:
                break;
        }
    }
}

function playGame() {
    console.log("The game is first to 3 points.");
    
    while (compScore < 3 && humanScore < 3) {
        playRound();
    }

    if (compScore == 3) {
        console.log("Computer wins!")
    } else {
        console.log("Player Wins!")
    }
}

playGame();