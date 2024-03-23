let userScore=0;
let comScore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");
//step 4
const draw = () =>{
    console.log("Draw");
    msg.innerText = "Game was draw 😑";
    msg.style.backgroundColor  = "white";
    msg.style.color = "black";
}
//step 5
const showWinner = (userWin,computerChoice,userChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Your win!🥳 Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor  = "green";
    } else {
        // console.log("You lose Try again");
        comScore++;
        comScorePara.innerText = comScore;
        msg.innerText = `You lose🥲 ${computerChoice} beats your ${userChoice} Try again`;
        msg.style.backgroundColor  = "red";
    }
    
}
//step 3
const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomInx = Math.floor(Math.random()*3);
    // console.log("computer choice index:",randomInx);
    return options[randomInx];
}
//step 2
const playGame = (userChoice)=>{
    // console.log("user choice",userChoice);
    let computerChoice = genComputerChoice();
    // console.log("computer choice", computerChoice);
    if (computerChoice === userChoice){        //if this condition is true then step
        draw();                    
    }else {
        let userWin = true;
        if(userChoice === "rock"){  //if user choses rock then computer can only generate the other 2
            //scissors, paper
            userWin = computerChoice === "paper"? false : true;
        } else if (userChoice === "paper"){
            //rock, scissors
            userWin = computerChoice === "scissors"? false: true;
        } else{
            //rock, paper
            userWin = computerChoice ==="rock"? false: true; 
        }
        showWinner(userWin,computerChoice,userChoice); //from here step 5
    }
}
//step 1
choices.forEach((choice)=> {
    // console.log(choice);
    const userChoice = choice.getAttribute("id");  //selecting id through getAttribute 
    choice.addEventListener("click",()=>{
        //console.log("Choice was clicked ",userChoice  );
        playGame(userChoice);
    })
})