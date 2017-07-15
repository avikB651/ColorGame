newGame();

function newGame(){

    var colorPicker = document.querySelectorAll('.squares');
    var i;
    var colors = [];

    for(i = 0;i < colorPicker.length;i++){

        colorPicker[i].style.backgroundColor = generateRandomColor();
        colors[i] = colorPicker[i].style.backgroundColor;

        var currentColorIndex = Math.floor(((Math.random()) * 6));

        var currentColor = colorPicker[currentColorIndex].style.backgroundColor;
        console.log(currentColor);
        document.getElementById("colorCode").innerHTML = currentColor;


        colorPicker[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === currentColor){
                document.getElementById("text").innerHTML = "You are right!!!"
                for(i = 0;i < colorPicker.length;i++){
                    colorPicker[i].style.backgroundColor = currentColor;
                }
                document.querySelector('.jumbotron').style.backgroundColor = currentColor;

            }else{
                this.style.backgroundColor = "#232323";
                document.getElementById("text").innerHTML = "<strong>Try Again!!!</strong>"
            }

        });
    }
}
document.querySelector("#newGame").addEventListener("click",function(){
  
});


function generateRandomColor(){

    var randomRedIndex = Math.floor(((Math.random())* 256));
    var randomGreenIndex = Math.floor(((Math.random()) * 256));
    var randomBlueIndex = Math.floor(((Math.random()) * 256));

    var colorCode = "rgb(" + randomRedIndex + ", " + randomGreenIndex + ", " + randomBlueIndex + ")";

    return colorCode;

}
