 function setup() {
 	createCanvas(windowWidth, windowHeight);
 	frameRate(300);
}

function touchMoved() {
	fill(0,0,0,192);
	noStroke();
	ellipse(touchX, touchY, 10, 10);
	return false;
}
