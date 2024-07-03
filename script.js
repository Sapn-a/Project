let userScore=0;
let compScore=0;
const msg= document.querySelector("#msg");
let uScore= document.querySelector("#user-score");
let cScore= document.querySelector("#comp-score");
const choices= document.querySelectorAll(".choice");

const gencompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 3);
    return(options[index]);
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText=`Congratulations! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        uScore.innerText = userScore;
    }
    else{
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        cScore.innerText= compScore;
    }
};

const game= (userChoice) => {
    console.log("Your Choice: ",userChoice );
    const compChoice= gencompChoice();
    console.log("Computer Choice: ",compChoice );

    if(userChoice===compChoice){
        msg.innerText= "Match Draw";
    }
    else{
        let userWin=true;
        if(userChoice==='Rock'){
            userWin= compChoice==="Paper" ? false:true;}
        else if(userChoice=== 'Paper'){
            userWin= compChoice==="Scissors" ? false:true;
        }
        else{
            userWin= compChoice==='Rock' ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
        //console.log("Choice Clicked was:",userChoice);
        game(userChoice);
    })
});