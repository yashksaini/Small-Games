const start_box = document.getElementById("start_box");
const start_btn = document.getElementById("start_btn");
const game = document.getElementById("game");
const you_box = document.getElementById("you_box");
const bot_box = document.getElementById("bot_box");
const all_possible = ["rock", "paper", "scissor"];
let player_score = 0;
let bot_score = 0;
let player_value = 0;
let bot_value = 0;
let status;
start_btn.addEventListener("click", () => {
  game.classList.remove("hide");
  start_box.classList.add("hide");
});
const select_btn = document.getElementsByClassName("select_btn");
for (let i = 0; i < select_btn.length; i++) {
  select_btn[i].addEventListener("click", () => {
    clickedBox(i);
  });
}
function clickedBox(value) {
  bot_value = Math.floor(Math.random() * 3);
  player_value = value;
  you_box.innerHTML = `
  <img src="images/${all_possible[player_value]}.png" alt="" class='wow fadeInRight' />
  <div>You</div>
  `;
  bot_box.innerHTML = `
  <img src="images/${all_possible[bot_value]}.png" alt="" class='wow fadeInRight' />
  <div>Bot</div>
  `;
  check_value(player_value, bot_value);
}
function check_value(a, b) {
  if (a == b) {
    status = "Tie";
  } else if ((a == 0 && b == 1) || (a == 1 && b == 2) || (a == 2 && b == 0)) {
    status = "You Lose";
    bot_score++;
  } else {
    status = "You Win";
    player_score++;
  }
  document.getElementById(
    "status"
  ).innerHTML = `<p class='wow fadeInDown'>${status}</p>`;
  document.getElementById("player_score").innerHTML = player_score;
  document.getElementById("computer_score").innerHTML = bot_score;
  checkWinner();
}
function checkWinner() {
  if (bot_score === 10 || player_score === 10) {
    document.getElementById("result").classList.remove("hide");
    if (bot_score === 10) {
      document.getElementById("show_result").innerHTML = "You Lose";
    } else {
      document.getElementById("show_result").innerHTML = "You Win";
    }
  }
}
