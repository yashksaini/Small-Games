let player = true;
const box = document.getElementsByClassName("button");
const current = document.getElementById("status");
let winner = false;
let moveCount = 0;
let values = [];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let moves = [];
for (let i = 0; i < 9; i++) {
  moves[i] = null;
}
console.log(moves);

function start() {
  for (let i = 0; i < 9; i++) {
    box[i].addEventListener("click", () => {
      play(i);
    });
  }
}

function play(button) {
  moveCount++;
  if (player) {
    box[button].innerHTML = "X";
    box[button].style.color = "#12e177";
    current.innerHTML = "O";
    current.style.color = "#ffc72a";
    player = !player;
    moves[button] = "X";
  } else {
    box[button].innerHTML = "O";
    box[button].style.color = "#ffc72a";
    current.innerHTML = "X";
    current.style.color = "#12e177";
    player = !player;
    moves[button] = "O";
  }
  box[button].disabled = true;
  box[button].classList.add("animate");
  console.log(moves);
  checkWinner();
}

function checkWinner() {
  for (let i = 0; i < 8; i++) {
    let a = winningCombinations[i][0];
    let b = winningCombinations[i][1];
    let c = winningCombinations[i][2];

    if (moves[a] && moves[a] === moves[b] && moves[b] === moves[c]) {
      winner = moves[a];
      stop(winner, a, b, c);
      winner = true;
    }
    if (!winner && moveCount > 8) {
      document.getElementById("game").style.display = "none";
      document.getElementById(
        "winner"
      ).innerHTML = `<b style='color:#12e177'>X</b> and <b style='color:#ffc72a'>O</b> Tied`;
    }
  }
}
function stop(winner, a, b, c) {
  let color = "#12e177";

  document.getElementById("game").style.display = "none";
  box[a].classList.add("win");
  box[b].classList.add("win");
  box[c].classList.add("win");

  for (let i = 0; i < 9; i++) {
    box[i].disabled = true;
  }
  if (winner === "O") {
    color = "#ffc72a";
  }
  document.getElementById("winner").innerHTML =
    `Winner is <b style='color:` + color + `;'>` + winner + `</b>`;
}
