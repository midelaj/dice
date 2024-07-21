var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "/images/dice" + randomNumber1 + ".png";

var getDiceImg = document.querySelectorAll("img")[0];

getDiceImg.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "/images/dice" + randomNumber2 + ".png";

var getDiceImg2 = document.querySelectorAll("img")[1];

getDiceImg2.setAttribute("src", randomImageSource1);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1  is the winner"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 is the winner";
} else {
    document.querySelector("h1").innerHTML = "players  are in tie";
} 