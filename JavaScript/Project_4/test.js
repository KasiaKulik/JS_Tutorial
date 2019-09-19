var colorChanger = document.getElementById("color-changer");
var colors = ["red", "orange", "yellow", "green", "darkgreen", "blue"];
var counter = [0];

function changeColor (){
    if (counter >=colors.length){
        counter = 0;
    }
    
    colorChanger.style.background = colors[counter];
    counter ++;
}

var myTimer = setInterval(changeColor, 2000);

colorChanger.onclick = function(){
    clearInterval(myTimer);
    colorChanger.innerHTML = "Timer has stop!";

};
