const dot_board = document.getElementById("dot_board");
const line = document.getElementsByClassName("line");
const box = document.getElementsByClassName("box");
const winboxes = [
  [0, 24, 1, 20],
  [1, 25, 2, 21],
  [2, 26, 3, 22],
  [3, 27, 4, 23],

  [5, 28, 6, 24],
  [6, 29, 7, 25],
  [7, 30, 8, 26],
  [8, 31, 9, 27],

  [10, 32, 11, 28],
  [11, 33, 12, 29],
  [12, 34, 13, 30],
  [13, 35, 14, 31],

  [15, 36, 16, 32],
  [16, 37, 17, 33],
  [17, 38, 18, 34],
  [18, 39, 19, 35],
];
let player = false;
let allClickedLines = [];
let boxFilled = 0;
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
player1.style.borderColor = "#f5f5f5";

let redScore = 0;
let blueScore = 0;
drawBoard();
function drawBoard() {
  dot_board.innerHTML = "";
  //   To draw dots
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let x = i * 80;
      let y = j * 80;
      dot_board.innerHTML += `<div style="left:${x}px;top:${y}px" class="dot  wow flash" data-wow-delay="0s"></div>`;
    }
  }
  //   To draw horizontal lines
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
      let x = i * 80 + 10;
      let y = j * 80 + 7;
      dot_board.innerHTML += `<div style="left:${x}px;top:${y}px" class="line hline wow lightSpeedInLeft" data-wow-delay="1.5s"></div>`;
    }
  }
  //   To draw vertical lines
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      let x = i * 80 + 7;
      let y = j * 80 + 10;
      dot_board.innerHTML += `<div style="left:${x}px;top:${y}px" class="line vline wow backInDown" data-wow-delay="2s""></div>`;
    }
  }
  //   To draw boxes
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let x = i * 80 + 10;
      let y = j * 80 + 10;
      dot_board.innerHTML += `<div style="left:${x}px;top:${y}px" class="box"></div>`;
    }
  }
  //   Add Click function to line
  for (let i = 0; i < line.length; i++) {
    line[i].addEventListener("click", () => {
      colorLine(i);
    });
  }
  //   Add Number to the box
  // for (let i = 0; i < box.length; i++) {
  //   box[i].innerHTML = i;
  // }
}
function colorLine(value) {
  if (allClickedLines.indexOf(value) === -1) {
    allClickedLines.push(value);

    if (!player) {
      line[value].classList.add("checked_player1");
    } else {
      line[value].classList.add("checked_player2");
    }
    checkBoxComplete(value);
  }
}
function checkBoxComplete(value) {
  let count = 0;
  for (let i = 0; i < winboxes.length; i++) {
    if (winboxes[i].indexOf(value) !== -1) {
      winboxes[i].splice(winboxes[i].indexOf(value), 1);
      if (winboxes[i].length === 0) {
        count++;
        boxFilled++;
        if (!player) {
          box[i].classList.add("filled_player1");
          redScore++;
        } else {
          box[i].classList.add("filled_player2");
          blueScore++;
        }
      }
    }
  }
  if (count === 0) {
    player = !player;
  }
  if (boxFilled === 16) {
    gameOver();
  }
  if (!player) {
    player1.style.borderColor = "#f5f5f5";
    player2.style.borderColor = "#00000000";
  } else {
    player1.style.borderColor = "#00000000";
    player2.style.borderColor = "#f5f5f5";
  }
  player1.innerHTML = redScore;
  player2.innerHTML = blueScore;
}
const start_box = document.getElementById("start_box");
const start_btn = document.getElementById("start_btn");
const game = document.getElementById("game");
start_btn.addEventListener("click", () => {
  game.classList.remove("hide");
  start_box.classList.add("hide");
});

function gameOver() {
  document.getElementById("result").classList.remove("hide");
  const show_result = document.getElementById("show_result");
  if (redScore > blueScore) {
    show_result.innerHTML = "Winner is <br/> RED";
  } else if (blueScore > redScore) {
    show_result.innerHTML = "Winner is <br/> BLUE";
  } else {
    show_result.innerHTML = "Match DRAW";
  }
}
