let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choices");
const userScorePara = document.querySelector("#usr-score");
const compScorePara = document.querySelector("#comp-score"); 
const genCompChoice = () =>{
    const  option = ["rock" , "paper", "scissors"];
    const randIdx =  Math.floor(Math.random () * 3);
    return option[randIdx];
};

const drawGame = () =>{
    console.log("game was draw");
    // msg.innerText = "game was draw. play again";
};

const showWinner = (userWin , userChoice, CompChoice) => {
    if(userWin){
        // userScore++;
        // userScorePara.innerText =   userScore ;
        msg.innerText = `you win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        // compScore++;
        // compScorePara.innerText = compScore; 
        msg.innerText = `you lose. ${CompChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    };
};

const playgame = (userChoice) =>{
    console.log( "user choice =", userChoice);
    const CompChoice = genCompChoice();
    console.log("comp choice =" ,CompChoice);

    if(userChoice === CompChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
        userWin = CompChoice === "paper" ? false : true;
     }else if(userChoice === "paper"){
        userWin =  CompChoice === "scissors" ? false : true;
     }else{
      userWin = CompChoice === "rock" ? false : true; 
     };
     showWinner(userWin, userChoice, CompChoice);
    };
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
       const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

