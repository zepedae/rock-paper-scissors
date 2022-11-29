function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = 
            choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

//Play a round of rock paper scissors returning result
function playRound(playerSelection, computerSelection){

    //Convert player input to lower case for comparison
    const lowerPlayer = playerSelection;

    if (lowerPlayer === computerSelection) {
        return("It's a tie!");
    }
    else if (lowerPlayer === "rock" && computerSelection === "scissors" ||
            lowerPlayer === "scissors" && computerSelection === "paper" ||
            lowerPlayer === "paper" && computerSelection=== "rock") {
        return(`You win! Congrats, ${lowerPlayer} beats ${computerSelection}.`)
    }
    else {
        return(`You lose! Sorry, ${computerSelection} beats ${lowerPlayer}.`)
    }

}


//Play 5 rounds of rock paper scissors and return the overall result
function game(playerSelection, computerSelection){

    const result = playRound(playerSelection, computerSelection);
    
    if (result.includes("win")){
        playerScore++;

        if(playerScore !== 5){
            document.getElementById('outcome').textContent=result;
            document.getElementById('playerScore').textContent = `Player Score: ${playerScore}`;
        } else {
            document.getElementById('outcome').textContent="Congrats!!!! You take the game!";
            document.getElementById('playerScore').textContent = `Player Score: ${playerScore}`;
        }
    } else {
        computerScore++;

        if(computerScore !== 5){
            document.getElementById('outcome').textContent=result;
            document.getElementById('compScore').textContent = `Computer Score: ${computerScore}`;
        } else {
            document.getElementById('outcome').textContent='Major bummer. You lose the game.';
            document.getElementById('compScore').textContent = `Computer Score: ${computerScore}`;
        }
    }
}


const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener('click', (e) => {
    if (playerScore < 5 && computerScore < 5){
        const playerSelection = button.getAttribute('id');
        const computerSelection = getComputerChoice();
        game(playerSelection, computerSelection);
    }
}));

