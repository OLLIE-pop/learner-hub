noStroke();

fill(26, 255, 0);

//var section

var x = 280;
var y = 190;
var X = 124;
var Y = 187;
var rectx = 102;
var rectX = 138;

draw = function() {
background(87, 235, 255);
fill(255, 0, 0);
//Both wheels of the car
ellipse(X, Y, 31, 34);
ellipse(x, y, 31, 34);

if (x > 375) {
    x = 5;
}

if (X > 375) {
    X = 5;
}

if (rectx > 375) {
    rectx = 5;
}

if (rectX > 375) {
    rectX = 5;
}

//Body and head of the car
rect(rectx, 150, 200, 25);
rect(rectX, 115, 131, 37);



x = x + 5;
X = X + 5;
rectx = rectx + 5;
rectX = rectX + 5;
};

















