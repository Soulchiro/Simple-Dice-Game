var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber2 + ".png");

var player1 = "images/dice" + randomNumber1 + ".png";
var player2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src.", player1);
document.querySelector(".dice .img2").setAttribute("src.", player2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML ="Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML ="Player 2 WINS!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML ="Player 1 WINS!";
}
