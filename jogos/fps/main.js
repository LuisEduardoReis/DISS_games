var TILE_SIZE = 32; 

var level;
var player;
var bullets;
var demons;

function preload() {
	levelImage = loadImage("assets/map.png");
	stoneTex = loadImage("assets/stone.png");
	demonTex = loadImage("assets/demon.png");
	demonDeadTex = loadImage("assets/demon_dead.png");
}

function setup() {
	createCanvas(640, 480, WEBGL);
	
	bullets = [];
	demons = [];
	level = new Level(levelImage);
	player = new Player();
	
	perspective(radians(60), width/height, 0.1,1000);	
	
	gl = p5.instance._renderer.GL;
}

function spriteMaterial() {
	ambientMaterial(255);

	gl.depthMask(true);
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	gl.enable(gl.BLEND);
}

function keyPressed() {
	if (keyCode == 38) {
		var b = new Bullet();
		b.x = player.x;
		b.y = player.y;
		b.dir = player.dir;
		bullets.push(b);
	}
}	

function draw() {
	background(0);
	
	// update
	player.update();
	for(var i = 0; i < demons.length; i++)	demons[i].update();
	for(var i = 0; i < bullets.length; i++)	bullets[i].update();
	
	bullets = bullets.filter(function (e) {return !e.remove;})
	
	// display
	resetMatrix(); translate(0,0,800);
	rotateY(-player.dir+radians(90));
	camera(player.x,-TILE_SIZE/2,player.y);
	
	level.display();  
	demons.sort(function(a,b) {return dist(player.x,player.y,b.x,b.y) - dist(player.x,player.y,a.x,a.y)});
	for(var i = 0; i < demons.length; i++) demons[i].display();
	for(var i = 0; i < bullets.length; i++) bullets[i].display();
}

