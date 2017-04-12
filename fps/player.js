

function Player() {
	
	var MOVE_SPEED = TILE_SIZE/12;
	var JUMP_SPEED = -TILE_SIZE/2;
	var GRAVITY = TILE_SIZE/64;
	
	this.x = this.px = level.spawn.x;
	this.y = this.py = level.spawn.y;
	this.dx = 0;
	this.dy = 0;
	this.radius = Math.round(0.3*TILE_SIZE);
	this.dir = 0;
	
	this.update = function() {
	// Movement
		this.px = this.x;
		this.py = this.y;
		
		if(keyIsDown(LEFT_ARROW)) this.dir += 0.05;
		if(keyIsDown(RIGHT_ARROW)) this.dir -= 0.05;
		
		var fs = 0;
		if(keyIsDown(UP_ARROW)) fs = 2;
		if(keyIsDown(DOWN_ARROW)) fs = -2;
		
		var ss = 0;
		if(keyIsDown(90)) ss = 2;
		if(keyIsDown(88)) ss = -2;
		
		// Clamp the max speed at which the player can move (important because of the colision engine)
		var maxSpeed = this.radius-1;
		fs = constrain(fs, -maxSpeed, maxSpeed);
		ss = constrain(ss, -maxSpeed, maxSpeed);
		
		// Apply Speed
		this.x += fs*cos(player.dir) + ss*cos(player.dir+radians(90));
		this.y -= fs*sin(player.dir) + ss*sin(player.dir+radians(90));;
		
		// Collisions
		collisions(this);
	}
}