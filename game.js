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
        return("it's a tie!");
    }
    else if (lowerPlayer === "rock" && computerSelection === "scissors" ||
            lowerPlayer === "scissors" && computerSelection === "paper" ||
            lowerPlayer === "paper" && computerSelection=== "rock") {
        return(`you win! congrats, ${lowerPlayer} beats ${computerSelection}.`)
    }
    else {
        return(`you lose! sorry, ${computerSelection} beats ${lowerPlayer}.`)
    }

}


//Play 5 rounds of rock paper scissors and return the overall result
function game(playerSelection, computerSelection){

    const result = playRound(playerSelection, computerSelection);
    
    if (result.includes('win')){
        playerScore++;
        document.getElementById('playerScore').textContent = `player score: ${playerScore}`;

        if(playerScore !== 5){
            document.getElementById('outcome').textContent=result;
        } else {
            document.getElementById('outcome').textContent= 'congrats!!!! you take the game!';
        }
    } else if (result.includes('lose')){
        computerScore++;
        document.getElementById('compScore').textContent = `computer score: ${computerScore}`;
        
        if(computerScore !== 5){
            document.getElementById('outcome').textContent=result;
        } else {
            document.getElementById('outcome').textContent='bummer. you lose the game.';    
        }
    } else {  
        document.getElementById('outcome').textContent=result;
    }
}


const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5){
        const playerSelection = button.getAttribute('id');
        const computerSelection = getComputerChoice();
        game(playerSelection, computerSelection);
    }
}));

