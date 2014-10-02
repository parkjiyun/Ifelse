function setup()
{
	createCanvas(800, 600);
	background(0);
	noFill();
	stroke(255, 0, 0);
	ellipse(400, 300, 100, 100);
}


function draw()
{
	background(255, 255, 0);
	ellipse(400, 400, 400, 400);


if (mouseX < 300) {
  ellipse(200, 200, 100, 100);
} else {
  ellipse(400, 200, 100, 100);
}
}