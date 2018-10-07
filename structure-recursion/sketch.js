
var size = window.innerWidth;
var dpr = window.devicePixelRatio;
var w = size * dpr;
var h = size * dpr * 0.44;
var startLevel = 8;
var currentLevelColor = 0;

function setup() {
  createCanvas(w, h);
  noStroke();
  noLoop();
  colorMode(HSB);
}

function draw() {
	var steps = 8;

	for (var i = 1; i < steps; i++) {
		var radius = w / steps;
		var initialWidth = width / steps; 
	 	drawCircle(i * initialWidth, radius, startLevel);
  	}
}

function drawCircle(x, radius, level) {                    
  currentLevelColor = 360 - (level * 40);
  fill(currentLevelColor, 100, 100);
  ellipse(x, height / 2, radius * 2, radius * 2);      
  
  if (level > 1) {
    level = level - 1;
    drawCircle(x - radius / 2, radius / 2, level);
    drawCircle(x + radius / 2, radius / 2, level);
  }
}