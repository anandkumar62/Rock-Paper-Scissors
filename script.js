let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];

    const randomx = Math.round(Math.random())*2
    return options[randomx];
};

const playGame = (userChoice) => {
    //user choice
    console.log("User Choice is",userChoice);
    //computer choice
    const compChoice = genCompChoice();
    console.log("Computer Choice is",compChoice);

    if (userChoice === compChoice) {
        //Draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false :true;
        }

        // console.log(userWin);
        showWinner(userWin, userChoice, compChoice);

    }

};

const drawGame = () => {
    msg.innerText = `Game was Draw ! Play Again`;
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
     
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
