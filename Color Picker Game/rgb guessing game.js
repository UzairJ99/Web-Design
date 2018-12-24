var colorsList = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var correctColor = pickColor();
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var colorDisplay = document.getElementById("rightColor");
colorDisplay.textContent = correctColor;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var mode = "hard";

easyBtn.addEventListener("click", function(){
	mode = "easy";
	this.classList.add("selected");
	hardBtn.classList.remove("selected");

	colorsList = generateRandomColors(3);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;
	h1.style.backgroundColor = "steelblue";
	for (var i =0; i<squares.length; i++){
		if(colorsList[i]) {
			squares[i].style.backgroundColor = colorsList[i];
		}
		else{
			squares[i].style.display = "none";
		}
	};
});

hardBtn.addEventListener("click", function(){
	mode = "hard";
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	colorsList = generateRandomColors(6);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;
	h1.style.backgroundColor = "steelblue";
	
	for (var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = colorsList[i];
		squares[i].style.display = "block";
	};
});

for (var i =0; i<squares.length; i++){
	//adding initial colors to squares
	squares[i].style.backgroundColor = colorsList[i];

	//adding click listeners to squares
	squares[i].addEventListener("click", function(){
		//setting a variable to be the color clicked
		var clickedColor = this.style.backgroundColor;
		//checks if the clicked color matches the correct color
		if(clickedColor === correctColor) {
			msgDisplay.textContent = "Correct!";
			changeColors(correctColor);
			h1.style.backgroundColor = correctColor;
			resetButton.textContent = "Play Again?"
		}
		else{
			this.style.backgroundColor = "#232323";
			msgDisplay.textContent = "Try Again";
			resetButton.textContent = "New Color"
		}
	})
};

resetButton.addEventListener("click", function(){
	this.textContent = "New Color";
	if (mode == "hard") {
		msgDisplay.textContent = "";
		colorsList = generateRandomColors(6);
		correctColor = pickColor();
		colorDisplay.textContent = correctColor;
		h1.style.backgroundColor = "steelblue";
		for (var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = colorsList[i];
		squares[i].style.display = "block";
		};
	}
	else {
		msgDisplay.textContent = "";
		colorsList = generateRandomColors(3);
		correctColor = pickColor();
		colorDisplay.textContent = correctColor;
		h1.style.backgroundColor = "steelblue";
		for (var i =0; i<squares.length; i++){
			if(colorsList[i]) {
				squares[i].style.backgroundColor = colorsList[i];
			}
			else{
				squares[i].style.display = "none";
			}
		};
	}
});

function changeColors(color){
	for (var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	};
}

function pickColor(){
	var randomValue = Math.floor(Math.random()*colorsList.length);
	return colorsList[randomValue];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for (var i =0; i<num; i++) {
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red,green and blue from 0-255
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g  + ", " + b + ")";
}