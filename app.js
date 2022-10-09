// data variable

var currentPlayer = 0;
var scoreP1 = 0;
var scoreP2 = 0;
var currentP1 = 0;
var CurrentP2 = 0;

// ui variable
var scoreZero = document.querySelector("#score-0");
var scoreOne = document.querySelector("#score-1");
var currentZero = document.querySelector("#current-0");
var currentOne = document.querySelector("#current-1");
var startImg = document.querySelector(".dice");
var panalZero = document.querySelector(".player-0-panel");
var panalOne = document.querySelector(".player-1-panel");

// rolldice button

document.querySelector(".btn-roll").addEventListener("click", rollDice);
function rollDice() {
  var randomDice = Math.floor(Math.random() * 6) + 1;
  if (randomDice !== 1) {
    startImg.style.display = "block";
    startImg.src = "dice-" + randomDice + ".png";
    if (currentPlayer == 0) {
      currentP1 += randomDice;
      currentZero.textContent = currentP1;
    } else {
      CurrentP2 += randomDice;
      currentOne.textContent = CurrentP2;
    }
  }
  if (randomDice == 1) {
    startImg.style.display = "none";
    if (currentPlayer == 0) {
      currentP1 == "0";
      currentZero.textContent = 0;
    } else {
      CurrentP2 == "0";
      currentOne.textContent = 0;
    }
    changePlayer();
  }
}

// hold button

document.querySelector(".btn-hold").addEventListener("click", holdButton);
function holdButton() {
  startImg.style.display = "none";
  if (currentPlayer == 0) {
    scoreP1 += currentP1;
    scoreZero.textContent = scoreP1;
    currentZero.textContent = 0;
  } else {
    scoreP2 += CurrentP2;
    scoreOne.textContent = scoreP2;
    currentOne.textContent = 0;

    // check winner
  }
  if (scoreP1 >= 100 || scoreP2 >= 100) {
    alert("you are win");
  }
  changePlayer();
}

function changePlayer() {
  if (currentPlayer == 0) {
    currentPlayer = 1;
    panalZero.classList.remove("active");
    panalOne.classList.add("active");
  } else {
    currentPlayer = 0;
    panalZero.classList.add("active");
    panalOne.classList.remove("active");
  }
}

function gameStart() {
  scoreZero.textContent = "0";
  scoreOne.textContent = "0";
  currentZero.textContent = "0";
  currentOne.textContent = "0";
  startImg.style.display = "none";
}
gameStart();
