var numSquares = 6;
var colors = [];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){	
	setUpModeButtons();
	setUpSquare();
   reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
		  modeButtons[0].classList.remove("selected");
		  modeButtons[1].classList.remove("selected");
	     this.classList.add("selected");
	     this.textContent === "Easy"? numSquares=3:numSquares=6;
	     reset();
		});
	}
}

function setUpSquare(){
	for (var i=0; i<squares.length;i++){
		squares[i].addEventListener("click",function(){
	      var clickedColor = this.style.background;
	      if(clickedColor === pickedColor){
	         message.textContent ="Correct";
	         resetButton.textContent = "Play Again?";
	         changeColor(clickedColor);
	         h1.style.background = clickedColor;
	      }
	      else{
	      	this.style.background = "#232323";
	      	message.textContent = "Try Again";
	      }
		});
  }
}

function reset(){
 colors = generateRandomColors(numSquares);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 message.textContent = "";
 resetButton.textContent = "New Colors";
 for(var i = 0; i<squares.length; i++){
 	if (colors[i]){
 	 squares[i].style.display = "block";
    squares[i].style.background = colors[i];
 	} else{
 		squares[i].style.display = "none";
 	}	
 }
 h1.style.background = "steelblue";
}

resetButton.addEventListener("click",function(){
 reset();
});

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
     arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() *255);
	var green = Math.floor(Math.random() *255);
	var blue = Math.floor(Math.random() *255);
	
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}