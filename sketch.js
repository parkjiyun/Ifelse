function setup()
{
	createCanvas(800, 600);
	background(0);
	noFill();
	noStroke();
}


function draw()
{
	background(255);
	fill(255, 0, 0);

	// draw function
	if (mouseX < 100) {
		ellipse(50, 200, 100, 100);
	} else if (mouseX < 200){
		ellipse(150, 200, 100, 100);
	} else if (mouseX < 300){
		ellipse(250, 200, 100, 100);
	} else if (mouseX < 400){
		ellipse(350, 200, 100, 100);
	} else if (mouseX < 500){
		ellipse(450, 200, 100, 100);
	} else {
		ellipse(550, 200, 100, 100);

		fill(0,255,0);
		noStroke();
		if (mouseY < 100) {
			ellipse(550, 200, 100, 100);
		} else if (mouseY < 200){
			ellipse(550, 300, 100, 100);
		} else if (mouseY < 300){
			ellipse(550, 400, 100, 100);
		} else if (mouseY < 400){
			ellipse(550, 500, 100, 100);
		} 

	}



}