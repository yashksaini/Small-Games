const allBlock = document.getElementsByClassName("move_box");
const block = document.getElementsByClassName("block");
const scoreShow = document.getElementById("score");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

let position = 0;
let speed = 28;
let level = 1;
let t;
let clear = false;
let status = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
let score = 0;

const start = () => {
  document.getElementById("start").style.display = "none";
  screen1.classList.add("hidden");
  screen2.classList.add("visible");
  t = setInterval(move, speed);
  for (let i = 0; i < 24; i++) {
    block[i].addEventListener("click", () => {
      play(i);
    });
  }
  moveColor();
};
const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};
const move = () => {
  if (clear) {
    clearInterval(t);
    return;
  }
  if (position === 104) {
    position = 0;
    moveColor();
  }
  position += 1;
  allBlock[0].style.transform = "translateY(" + -position + "px)";
};
// Function to get new virus
const moveColor = () => {
  if (status[0][0] + status[0][1] + status[0][2] + status[0][3] === 1) {
    stop(2);
  }
  for (let i = 0; i < 5; i++) {
    status[i] = status[i + 1];
  }
  let a = [0, 1, 2, 3];
  shuffle(a);
  let y = a[0];
  status[5] = [0, 0, 0, 0];
  status[5][y] = 1;
  colorBlock();
};
// Function to move virus up
const colorBlock = () => {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      let a = i * 4 + j;
      if (status[i][j] === 0) {
        block[a].innerHTML = "";
        block[a].className = "block white";
      } else if (status[i][j] === 1) {
        block[a].className = "block black";
        block[a].innerHTML = "<i class='fas fa-virus'></i>";
      } else {
        block[a].innerHTML = "<i class='fas fa-virus-slash'></i>";
        block[a].className = "block green";
      }
    }
  }
};

function play(i) {
  let row = parseInt(i / 4);
  let column = i % 4;

  if (status[row][column] === 1) {
    status[row][column] = 2;
    score += level;
    updateLevel();
    scoreShow.innerHTML = score;
    colorBlock();
  } else if (status[row][column] === 0) {
    stop(1);
  }
}

function updateLevel() {
  if (score >= 7 && score <= 25) {
    level = 2;
  } else if (score >= 25 && score <= 60) {
    level = 3;
  } else if (score >= 60 && score <= 100) {
    level = 4;
  } else if (score > 100 && score <= 150) {
    level = 5;
  } else if (score > 150 && score <= 220) {
    level = 6;
  } else if (score > 220 && score <= 300) {
    level = 7;
  } else if (score > 300 && score <= 500) {
    level = 8;
  } else if (score > 500 && score <= 1000) {
    level = 9;
  } else if (score > 1000) {
    level = 10;
  }
  document.getElementById("level").innerHTML = level;
  let pre_speed = speed;
  speed = 28 - level;
  if (speed < pre_speed) {
    t = setInterval(move, speed);
  }
}

function stop(value) {
  clear = true;
  document.getElementById("final").innerHTML = score;
  document.getElementById("screen3").classList.add("show");
  if (value === 1) {
    document.getElementById("message").innerHTML = "Clicked the white tile";
  } else {
    document.getElementById("message").innerHTML = "Virus Missed";
  }
}
