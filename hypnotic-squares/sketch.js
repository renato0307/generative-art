
let size = window.innerWidth;
let dpr = window.devicePixelRatio;
let w = size * dpr;
let h = size * dpr;

let finalSize = 3;
let startSteps;
let offset = 200;
let tileStep = (size - offset * 2) / 50;
let startSize = tileStep;
let directions = [-1, 0, 1];

function setup() {
	createCanvas(w, h);
	colorMode(HSB);
	noLoop();
}

function draw() {	
	// Draws the outside rectangle
	strokeWeight(50);
	stroke(360, 100, 0);
	rect(50, 50, size - 100, size - 100);


	strokeWeight(0.5);
	for (var x = offset; x < size - offset; x += tileStep) {
		for (var y = offset; y < size - offset; y += tileStep) {
			stroke(random(0, 360), 100, 100);

			startSteps = 2 + Math.ceil(Math.random() * 3);
			var xDirection = directions[Math.floor(Math.random() * directions.length)];
			var yDirection = directions[Math.floor(Math.random() * directions.length)];
			doit(x, y, startSize, startSize, xDirection, yDirection, startSteps - 1);
		}
	}
}

function doit(x, y, width, height, xMovement, yMovement, steps) {
	rect(x, y, width, height);
	if (steps >= 0) {
		var newSize = (startSize) * (steps / startSteps) + finalSize;
		var newX = x + (width - newSize) / 2;
		var newY = y + (height - newSize) / 2;
		newX = newX - ((x - newX) / (steps + 2)) * xMovement;
		newY = newY - ((y - newY) / (steps + 2)) * yMovement;
		doit(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1);
	}
}
