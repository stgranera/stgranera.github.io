/*
 * @name Hue
 * @description Hue is the color reflected from or transmitted through an 
 * object and is typically referred to as the name of the color (red, blue, 
 * yellow, etc.) Move the cursor vertically over each bar to alter its hue.
 */
var canvas;
var barWidth = 5;
var lastBar = -10;

function setup() {
   canvas = createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB, height, height, height);  
  noStroke();
  background(0);
}

function draw() {
  var whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    var barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};