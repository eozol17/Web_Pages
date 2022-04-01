var random1 = Math.floor(Math.random() * 6)+ 1;
var random2 = Math.floor(Math.random() * 6)+ 1;

var randomDiceImg1 = "dice" + random1 + ".png";
var randomDiceImg2 = "dice" + random2 + ".png";

var randomImageSource = "images/" + randomDiceImg1;
var randomImageSource1 = "images/" + randomDiceImg2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource1);

var h1 = document.querySelector("h1");

if(random1 > random2){
    h1.innerText = "Player 1 Wins!";
}
else if(random1 < random2){
    h1.innerText = "Player 2 Wins!";
}
else{
    h1.innerText = "Draw!";
}