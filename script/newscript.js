var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);
var squares = document.querySelectorAll(".squares");
var pickedColor = pickRandomColor();
var colorText = document.querySelector("#colorCode");
var header = document.querySelector(".jumbotron");
var msgSection = document.querySelector("#text");
var newGameBtn = document.querySelector("#newGame");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

colorText.textContent = pickedColor.toLocaleUpperCase();


for(var i = 0;i < colors.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].classList.remove("selected");
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            header.style.backgroundColor = pickedColor;
            msgSection.innerHTML = "Correct!!!";
            fillColors(pickedColor);
            newGameBtn.textContent = "Play Again?";
        }else{
            this.style.backgroundColor = "#232323";
            msgSection.innerHTML = "Try Again!!!";
        }
    })
}

hardBtn.addEventListener("click",function(){
  newGameBtn.textContent = "New Colors";
  msgSection.innerHTML = "";
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 6;
  colors = generateRandomColor(numOfSquares);
  pickedColor = pickRandomColor();
  colorText.textContent = pickedColor.toLocaleUpperCase();
  for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
		}
	}
  header.style.backgroundColor = "skyblue";
})

easyBtn.addEventListener("click",function(){
  newGameBtn.textContent = "New Colors";
  msgSection.innerHTML = "";
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColor(numOfSquares);
  pickedColor = pickRandomColor();
  colorText.textContent = pickedColor.toLocaleUpperCase();
  for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
  header.style.backgroundColor = "skyblue";
})

newGameBtn.addEventListener("click",function(){
  //get new colors
  newGameBtn.textContent = "New Colors";
  msgSection.innerHTML = "";
  numOfSquares = 6;
  colors = generateRandomColor(numOfSquares);
  pickedColor = pickRandomColor();
  colorText.textContent = pickedColor.toLocaleUpperCase();
  for(var i = 0;i < colors.length; i++){
      squares[i].style.backgroundColor = colors[i];
  }
  header.style.backgroundColor = "skyblue";
})

function generateRandomColor(num) {
  colors = [] ;
  for (var i = 0; i < num; i++) {
    colors.push(newColor());
  }
  return colors;
}

function newColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var color = "rgb(" + red + ", " + green + ", " + blue + ")";

  return color;
}

function pickRandomColor(){
    var randIndex = Math.floor(Math.random() * colors.length);

    return colors[randIndex];
}

function fillColors(col){
  for(var i = 0;i < colors.length; i++){
    squares[i].style.backgroundColor = col;
  }
}
