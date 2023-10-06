let userChoice = "";
let userScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

const div = document.querySelector('div')
const playerScoreDisplay = document.createElement('p')
const computerScoreDisplay = document.createElement('p')
const resultDisplay = document.createElement('p')

div.append(playerScoreDisplay, computerScoreDisplay, resultDisplay);

rockButton.addEventListener("click", function() {
    userChoice = "rock";
    playGame();
});

paperButton.addEventListener("click", function() {
    userChoice = "paper";
    playGame();
});

scissorsButton.addEventListener("click", function() {
    userChoice = "scissors";
    playGame();
});

function playGame() {
    const computerChoices = ["rock", "paper", "scissors"];
    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log("Player chose: " + userChoice)
    console.log("Computer chose: " + computerChoice);

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        userScore++

    } else {
        result = "Computer wins!";
        computerScore++
    }

    playerScoreDisplay.textContent = "Your score: " + userScore;
    computerScoreDisplay.textContent = "Computer's score: " + computerScore;
    resultDisplay.textcontent = result;

   
    if (computerScore === 5){
        alert("Computer has won the game!")
    } else if (userScore === 5){
        alert("Player has won the game!")
    }
    
    
}





