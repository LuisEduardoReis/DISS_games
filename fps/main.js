var TILE_SIZE = 32; 

var levelImage;

var level;
var player;
var bullets;

function preload() {
	levelImage = loadImage("map.bmp");
	stoneTex = loadImage("stone.png");
}

function setup() {
	createCanvas(320, 240, WEBGL);

	level = new Level(levelImage);
	player = new Player();
	bullets = [];
	
	perspective(radians(60), width/height, 0.1,1000);	
	ambientLight(255);
}

function keyPressed() {
	if (keyCode == 32) { // space
		var b = new Bullet();
		b.x = player.x;
		b.y = player.y;
		b.dir = player.dir;
		bullets.push(b);
	}
}	


function draw() {
	background(0);
	orbitControl();
	
	// update
	player.update();
	for(var i = 0; i < bullets.length; i++)	bullets[i].update();
	
	bullets = bullets.filter(function (e) {return !e.remove;})
	
	// display
	translate(0,0,200);
	rotateY(-(player.dir-radians(90)));
	camera(player.x,TILE_SIZE/2,player.y);
	
	level.display();  
	for(var i = 0; i < bullets.length; i++) bullets[i].display();
}

