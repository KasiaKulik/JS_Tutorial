var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = "KasiaK";
    this.drive = function (speed, time){
        console.log(speed * time);
    }
    this.logDriver = function(){
        console.log("driver name is "+ this.driver);
    }
}

var myCar = new Car(70,"Mike");
var myCar2 = new Car(50, "Lucky Look");
var myCar3 = new Car(20,"He-Man");
var myCar4 = new Car(170,"Spartacus");

myCar.drive(30,5);
myCar3.logDriver();



