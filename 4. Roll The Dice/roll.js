var img_status = false;
var currentUser = true;
var p1_score = 0;
var p2_score = 0;
var p1_saved_score = 0;
var p2_saved_score = 0;
const diceValues = ["one", "two", "three", "four", "five", "six"];
var dice_icon1_value = 1;
var dice_icon2_value = 1;

function roll() {
  // To get random number between 1 and 6
  var currentDiceValue = Math.floor(Math.random() * 6) + 1;
  var dice_icon1 = document.getElementById("dice_icon1");
  var dice_icon2 = document.getElementById("dice_icon2");

  // To get animation on dice
  if (img_status === false) {
    dice_icon2.style.display = "inline";
    dice_icon1.style.display = "none";

    // Removing previous class
    let dice_value_name = diceValues[dice_icon2_value - 1];
    let x = "fa-dice-" + dice_value_name;
    dice_icon2.classList.remove(x);

    // Adding new Class
    dice_icon2_value = currentDiceValue;
    dice_value_name = diceValues[dice_icon2_value - 1];
    let y = "fa-dice-" + dice_value_name;
    dice_icon2.classList.add(y);

    img_status = !img_status;
  } else {
    dice_icon1.style.display = "inline";
    dice_icon2.style.display = "none";

    // Removing previous class
    let dice_value_name = diceValues[dice_icon1_value - 1];
    let x = "fa-dice-" + dice_value_name;
    dice_icon1.classList.remove(x);

    // Adding new Class
    dice_icon1_value = currentDiceValue;
    dice_value_name = diceValues[dice_icon1_value - 1];
    let y = "fa-dice-" + dice_value_name;
    dice_icon1.classList.add(y);

    img_status = !img_status;
  }

  // Calling checkStatus Funcion to increacse score or pass to other player
  checkStatus(currentDiceValue);
}

// Change funtion call whenever user changes
function change(current) {
  if (!current) {
    document.getElementById("p2_current").style.display = "inline";
    document.getElementById("p1_current").style.display = "none";
    document.getElementById("roll_btn2").disabled = false;
    document.getElementById("roll_btn1").disabled = true;
    document.getElementById("player1").style.filter = "grayscale(100%)";
    document.getElementById("player2").style.filter = "grayscale(0%)";
  } else {
    document.getElementById("p2_current").style.display = "none";
    document.getElementById("p1_current").style.display = "inline";
    document.getElementById("roll_btn1").disabled = false;
    document.getElementById("roll_btn2").disabled = true;
    document.getElementById("player2").style.filter = "grayscale(100%)";
    document.getElementById("player1").style.filter = "grayscale(0%)";
  }
}

// Calls for score updation for the current user.
function score(current, currentDiceValue) {
  if (current) {
    p1_score += parseInt(currentDiceValue);
    document.getElementById("player1_score").innerHTML = p1_score;
  } else {
    p2_score += parseInt(currentDiceValue);
    document.getElementById("player2_score").innerHTML = p2_score;
  }
  // call checkwinner after score updation for winner check at every point
  checkWinner();
}
// Check the value on dice . if "1" change player otherwise increase score.
function checkStatus(currentDiceValue) {
  if (currentDiceValue === 1) {
    if (currentUser) {
      p1_score = p1_saved_score;
      document.getElementById("player1_score").innerHTML = p1_score;
    } else {
      p2_score = p2_saved_score;
      document.getElementById("player2_score").innerHTML = p2_score;
    }
    currentUser = !currentUser;
    change(currentUser);
  } else {
    score(currentUser, currentDiceValue);
  }
}
// Calls whenever user save its score
function saveState() {
  if (currentUser) {
    p1_saved_score = p1_score;
    document.getElementById("p1_saved").innerHTML = p1_saved_score;
  } else {
    p2_saved_score = p2_score;
    document.getElementById("p2_saved").innerHTML = p2_saved_score;
  }
  currentUser = !currentUser;
  change(currentUser);
}
// To check the winner for the game.
function checkWinner() {
  if (p1_score > 99) {
    document.getElementById("winner").style.display = "block";
    document.getElementById("winner").innerHTML = " Player 1 Won ";
    document.getElementById("save_btn").style.display = "none";
    document.getElementById("roll_btn1").disabled = true;
    document.getElementById("roll_btn2").disabled = true;
    document.getElementById("restart_btn").style.display = "inline";
  } else if (p2_score > 99) {
    document.getElementById("winner").style.display = "block";
    document.getElementById("winner").innerHTML = " Player 2 Won ";
    document.getElementById("save_btn").style.display = "none";
    document.getElementById("roll_btn1").disabled = true;
    document.getElementById("roll_btn2").disabled = true;
    document.getElementById("restart_btn").style.display = "inline";
  }
}
