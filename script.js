let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

// 2nd time
const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const rndIdx = Math.floor(Math.random() * 3);
  return options[rndIdx];
};

// 4th time
const drawGame = () => {
  msg.innerText = "Game was draw.play again";
  msg.style.backgroundColor = "black";
};

// 5th time
const showWinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `you lose!${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

// 3rd time
const playGame = (userchoice) => {
  console.log("user choice =", userchoice);
  // computer choice
  const compchoice = gencompchoice();
  console.log("comp choice =", compchoice);

  if (userchoice === compchoice) {
    // drawGame
    drawGame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      // paper scissors
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else {
      // userchoice scissors
      // com choice rock paper
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compchoice);
  }
};

// first time
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
