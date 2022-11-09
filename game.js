function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}


function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const comp = computerSelection.toLowerCase();

    const point = 0;

    if (player === comp) {
        return("It's a tie!");
    }
    else if (player === "rock" && comp === "scissors" || player === "scissors" && comp === "paper" || player === "paper" && comp === "rock") {
        return(`You win! Congrats, ${player} beats ${comp}.`)
    }
    else {
        return(`You lose! Sorry, ${comp} beats ${player}.`)
    }

}


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