const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScore();

/* if (score === null (!score)) {
              score = {
                wins: 0,
                losses: 0,
                ties: 0,
              };
            }*/

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  console.log(computerMove);

  if (playerMove === "scissors") {
    if (computerMove == "rock") {
      result = "you lose.";
    } else if (computerMove === "paper") {
      result = "you win.";
    } else if (computerMove === "scissors") {
      result = "tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove == "rock") {
      result = "you win.";
    } else if (computerMove === "paper") {
      result = "tie.";
    } else if (computerMove === "scissors") {
      result = "you lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove == "rock") {
      result = "tie.";
    } else if (computerMove === "paper") {
      result = "you lose.";
    } else if (computerMove === "scissors") {
      result = "you win.";
    }
  }

  if (result === "you win.") {
    score.wins++;
  } else if (result === "you lose.") {
    score.losses++;
  } else if (result === "ties.") {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScore();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = ` You
      <img src="./images/${playerMove}-emoji.png" alt="" class="move-icon" />
      <img src="./images/${computerMove}-emoji.png" alt="" class="move-icon" />
      computer`;
  /*you ${playerMove}- ${computerMove} - computer*/
  /* alert(
          `you picked ${playerMove}. computer pickeed ${computerMove}. ${result}
      wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`
        );*/
}

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
