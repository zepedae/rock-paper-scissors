function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = 
            choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

//Play a round of rock paper scissors returning result
function playRound(playerSelection, computerSelection){

    //Convert player input to lower case for comparison
    const lowerPlayer = playerSelection.toLowerCase();

    if (lowerPlayer === comp) {
        return("It's a tie!");
    }
    else if (lowerPlayer === "rock" && lowerComputer === "scissors" ||
            lowerPlayer === "scissors" && lowerComputer === "paper" ||
            lowerPlayer === "paper" && lowerComputer=== "rock") {
        return(`You win! Congrats, ${lowerPlayer} beats ${lowerComputer}.`)
    }
    else {
        return(`You lose! Sorry, ${lowerComputer} beats ${lowerPlayer}.`)
    }

}

//Play 5 rounds of rock paper scissors and return the overall result
function game(){
    let score = 0;

    for (let i = 0; i <5; i++){

        const playerSelection = prompt("Choose: rock, paper, or scissors.");
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.includes("win")){
            score++;
        }
        else  if (result.includes("lose")) {
            score--;
        }
    }

    if (score === 0){
        console.log("It's a tie!");
    }
    else if (score > 0){
        console.log("Congrats, you won!");
    }
    else {
        console.log("You lost!");
    }

}

game();