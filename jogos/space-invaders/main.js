var spritesImage;

var player;
var bullet;
var entities;
var enemies;
var enemyPattern = [
	[0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1],
	[2,2,2,2,2,2,2,2,2,2,2],
	[2,2,2,2,2,2,2,2,2,2,2]
];

function preload() {
	spritesImage = loadImage("sprites.png");
}

function setup() {	
	createCanvas(640,640);

	player = new Player();
	bullet = null;
	
	entities = [player];
	
	enemies = [];
	for(var y = 0; y < enemyPattern.length; y++)
	for(var x = 0; x < enemyPattern[y].length; x++) {
		var enemy = new Enemy(enemyPattern[y][x]);
		enemy.x = x*48+24;
		enemy.y = y*48+72;
		entities.push(enemy);
		enemies.push(enemy);		
	}
	
}

function draw() {
	// Update
	for(var i = 0; i < entities.length; i++) entities[i].update();
	
	for(var i = 0; i < entities.length; i++)
	for(var o = 0; o < entities.length; o++) {
		if (i == o) continue;
		var a = entities[i], b = entities[o];
		
		if (a.collide &&
			a.x - a.w/2 < b.x + b.w/2 &&
			a.x + a.w/2 > b.x - b.w/2 &&
			a.y - a.h/2 < b.y + b.h/2 &&
			a.y + a.h/2 > b.y - b.h/2
			) {
			a.collide(b);
		}
	}
	
	entities = entities.filter(function (e) {
		if (e.remove && e.destroy) e.destroy();
		return !e.remove;
	});
	
	// Display
	background(0,0,0);
	for(var i = 0; i < entities.length; i++) entities[i].display();
}