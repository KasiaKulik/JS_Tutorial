var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Kasia";

console.log(myCar.maxSpeed);
console.log(myCar.driver);

myCar.drive = function (){console.log("now driving");};

myCar.drive ();


var myCar2 = {
    
    maxSpeed:70, 
    driver:"Max", 
    drive:function (speed, time){
        console.log(speed * time);
    } 
};

console.log (myCar2.maxSpeed);
myCar2.drive (50, 3);