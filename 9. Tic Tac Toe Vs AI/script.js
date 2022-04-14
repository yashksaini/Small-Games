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
let allBoxes = [];
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
    box[button].style.color = "#0c9c52";
    current.innerHTML = "O";
    current.style.color = "#0c9c52";
    player = !player;
    moves[button] = "X";
    changearray();
  }
  box[button].disabled = true;
  box[button].classList.add("animate");
  checkWinner();
  computerTurn(button);
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
      return;
    }
    if (!winner && moveCount > 8) {
      document.getElementById("game").style.display = "none";
      document.getElementById(
        "winner"
      ).innerHTML = `<b style='color:#0c9c52'>X</b> and <b style='color:#ffc72a'>O</b> Tied<br>Play Again.`;
    }
  }
}
function stop(winner, a, b, c) {
  let color = "#0c9c52";

  document.getElementById("game").style.display = "none";
  box[a].classList.add("win");
  box[b].classList.add("win");
  box[c].classList.add("win");

  for (let i = 0; i < 9; i++) {
    box[i].disabled = true;
  }
  if (winner === "O") {
    color = "#ffc72a";
    winner = "Winner is Computer<br>Try Again";
  } else if (winner === "X") {
    winner = "You won<br>Play Again.";
  }
  document.getElementById("winner").innerHTML =
    `<i style='color:` + color + `;'>` + winner + `</i>`;
}

function computerTurn(value) {
  if (!winner) {
    moveCount++;
    if (value === 4) {
      const arr = [0, 2, 6, 8];
      shuffle(arr);
      let random = arr[0];
      checkO(random);
    } else if (value !== 4 && moveCount < 3) {
      checkO(4);
    } else if (value != 4 && moveCount === 4 && moves[4] === "X") {
      if (moves[0] && moves[8]) {
        const arr = [2, 6];
        shuffle(arr);
        checkO(arr[0]);
      } else if (moves[2] && moves[6]) {
        const arr = [0, 8];
        shuffle(arr);
        checkO(arr[0]);
      } else {
        completeif();
      }
    } else if (value != 4 && moveCount === 4 && moves[4] === "O") {
      if ((moves[0] && moves[8]) || (moves[2] && moves[6])) {
        const arr = [1, 3, 5, 7];
        shuffle(arr);
        checkO(arr[0]);
      } else {
        completeif();
      }
    } else {
      completeif();
    }
  }
}

function completeif() {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    let a = winningCombinations[i][0];
    let b = winningCombinations[i][1];
    let c = winningCombinations[i][2];

    if (moves[a] === moves[b] && moves[a] === "O" && moves[c] === null) {
      checkO(c);
      count++;
      break;
    } else if (moves[b] === moves[c] && moves[b] === "O" && moves[a] === null) {
      checkO(a);
      count++;
      break;
    } else if (moves[a] === moves[c] && moves[a] === "O" && moves[b] === null) {
      checkO(b);
      count++;
      break;
    }
  }
  if (count === 0) {
    restrictif();
  }
}
function restrictif() {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    let a = winningCombinations[i][0];
    let b = winningCombinations[i][1];
    let c = winningCombinations[i][2];

    if (moves[a] === moves[b] && moves[a] === "X" && moves[c] === null) {
      checkO(c);
      count++;
      break;
    } else if (moves[b] === moves[c] && moves[b] === "X" && moves[a] === null) {
      checkO(a);
      count++;
      break;
    } else if (moves[a] === moves[c] && moves[a] === "X" && moves[b] === null) {
      checkO(b);
      count++;
      break;
    }
  }
  if (count === 0) {
    if (moves[4] == "O") {
      if (moves[2] && !moves[6]) {
        checkO(6);
      } else if (moves[6] && !moves[2]) {
        checkO(2);
      } else if (moves[0] && !moves[8]) {
        checkO(8);
      } else if (moves[8] && !moves[0]) {
        checkO(0);
      } else if (moves[1] == "X" && moves[3] == "X" && !moves[0]) {
        checkO(0);
      } else if (moves[1] == "X" && moves[5] == "X" && !moves[2]) {
        checkO(2);
      } else if (moves[7] == "X" && moves[3] == "X" && !moves[6]) {
        checkO(6);
      } else if (moves[7] == "X" && moves[5] == "X" && !moves[8]) {
        checkO(8);
      } else {
        shuffle(allBoxes);
        checkO(allBoxes[0]);
      }
    } else {
      shuffle(allBoxes);
      checkO(allBoxes[0]);
    }
  }
}

function checkO(button) {
  box[button].innerHTML = "O";
  box[button].style.color = "#ffc72a";
  current.innerHTML = "X";
  current.style.color = "#12e177";
  player = !player;
  moves[button] = "O";
  changearray();
  box[button].disabled = true;
  box[button].classList.add("animate");
  checkWinner();
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
function changearray() {
  allBoxes.length = 0;
  for (let i = 0; i < 9; i++) {
    if (moves[i] === null) {
      allBoxes.push(i);
    }
  }
}
