var TILE_SIZE = 32; 
var levelImage;

var level;
var player;
var test = false;

function preload() {
	levelImage = loadImage("map.bmp");
}

function setup() {
	levelImage.loadPixels();
	level = new Level(levelImage);
	
	player = new Player(level);
	
	createCanvas(level.width*TILE_SIZE, level.width*TILE_SIZE);
}

function draw() {
	// Update
	player.update();
	
	// Display
	background(255,255,255);
	level.display();
	player.display();
}