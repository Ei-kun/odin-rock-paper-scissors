function getComputerChoice(){
    let computerValue=Math.floor(Math.random()*3);
    if(computerValue==0) {
        return "rock";
    }
    else if(computerValue==1){
        return "paper";
    }
    else {
        return "scissor";
    }
}
function getHumanChoice(){
    let humanValue=prompt("Enter choice");
    return humanValue;
}
function playRound(computerChoice,humanChoice){
    humanChoice=humanChoice.toLowerCase();
    if(computerChoice=="scissor" && humanChoice=="paper"){
        console.log("You lose! scissor beats paper");
        computerScore++;
    }
    else if(computerChoice=="paper" && humanChoice=="scissor"){
        console.log("You win! scissor beats paper");
        humanScore++;
    }
    else{
        if(computerChoice>humanChoice){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if(computerChoice<humanChoice){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else{
            console.log("Its a draw!");
        }
    }
}
function playGame(){
    for(let x=0;x<5;x++){
        playRound(getComputerChoice(),getHumanChoice());
    }
}
let humanScore=0,computerScore=0;
playGame();
if(humanScore>computerScore) console.log("You won!");
else if(humanScore<computerScore) console.log("You lost!");
else console.log("It's a draw!");