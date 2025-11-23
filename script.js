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
    const list=document.querySelector("ul");
    const outcome=document.createElement("li");
    humanChoice=humanChoice.toLowerCase();
    if(computerChoice=="scissor" && humanChoice=="paper"){
        outcome.textContent="You lose! scissor beats paper";
        console.log("You lose! scissor beats paper")
        computerScore++;
    }
    else if(computerChoice=="paper" && humanChoice=="scissor"){
        outcome.textContent="You win! scissor beats paper";
        console.log("You win! scissor beats paper");
        humanScore++;
    }
    else{
        if(computerChoice>humanChoice){
            outcome.textContent=`You win! ${humanChoice} beats ${computerChoice}`;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if(computerChoice<humanChoice){
            outcome.textContent=`You lose! ${computerChoice} beats ${humanChoice}`;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else{
            outcome.textContent="Its a draw!";
            console.log("Its a draw!");
        }
    }
    list.appendChild(outcome);
    const p=document.querySelector("p");
    p.textContent=`${humanScore}-${computerScore}`;
    if(humanScore==5){
        const body=document.querySelector("body");
        const heading=document.createElement("h3");
        heading.textContent='YOU WIN!!';
        body.appendChild(heading);
    }
    else if(computerScore==5){
        const body=document.querySelector("body");
        const heading=document.createElement("h3");
        heading.textContent='YOU LOST!!';
        body.appendChild(heading);
    }
}
let humanScore=0,computerScore=0;
const button=document.querySelectorAll("button");
button.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        playRound(getComputerChoice(),e.target.textContent);
    });
});