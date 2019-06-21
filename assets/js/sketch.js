
var topColor;
var bottomColor;
var Y_AXIS = 1;
var X_AXIS = 2;
var canvas;
var circles = [];

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  topColor = color("#1488CC");
  bottomColor = color("#2B32B2");
  for (var i=0; i<50; i++) {
    circles.push(new Circles());
  }
}

function draw(){
  setGradient(0,0,windowWidth,windowHeight,topColor,bottomColor,Y_AXIS);
  for (var i=0; i<circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}


function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}

function Circles() {
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.diameter = random(10, 30);
  this.speed = map(this.diameter, 10, 30, 1, 3);
  this.opacity = map(this.diameter, 10, 30, 255, 50);

  this.move = function() {
    this.x += map(mouseX, 0, windowWidth, -Math.abs(this.speed), this.speed);
    this.y += map(mouseY, 0, windowHeight, -Math.abs(this.speed), this.speed);
      if(this.y < -20){
        this.y = windowHeight;
      } else if (this.y > windowHeight + 20){
        this.y = -20;
      }

      if(this.x < -20){
        this.x = windowWidth;
      } else if(this.x > windowWidth){
        this.x = -20;
      }
  };

  this.display = function() {
    fill(255, this.opacity);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };

}
