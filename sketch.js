let snake;
let rez = 10;
let food;
let w;
let h;
var eaten = 0;

function setup() {
	createCanvas(650, 400);
	w = floor(width / rez);
	h = floor(height / rez);
	frameRate(20);
	snake = new Snake();
	foodLocation();
	
}

function foodLocation() {
	let x = floor(random(w));
	let y = floor(random(h));
	food = createVector(x, y);
}

function keyPressed() {
	if(keyCode === LEFT_ARROW){
		snake.setDir(-1, 0);
	} else if (keyCode === RIGHT_ARROW) {
		snake.setDir(1, 0);
	} else if (keyCode === DOWN_ARROW) {
		snake.setDir(0, 1);
	} else if (keyCode === UP_ARROW){
		snake.setDir(0, -1);
	}
}
function draw() {
	scale(rez)
	background(38, 70, 83);
	if (snake.eat(food)){
		eaten += 1;
		console.log(eaten)
		foodLocation();
	}
	snake.update();
	snake.show();

	noStroke();
	fill(233, 196, 106);
	rect(food.x, food.y, 1, 1);

	noStroke();
	fill(255);
	textSize(1);
 		text(eaten, w -2, 2);

}