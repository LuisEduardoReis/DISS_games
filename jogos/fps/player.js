

function Player() {
	var MOVE_SPEED = TILE_SIZE/12;
	
	this.x = this.px = level.spawn.x;
	this.y = this.py = level.spawn.y;
	this.dx = 0;
	this.dy = 0;
	this.radius = round(0.3*TILE_SIZE);
	this.dir = 0;
	this.speed = TILE_SIZE/16;
	
	this.update = function() {
	// Movement
		this.px = this.x;
		this.py = this.y;
		
		if(keyIsDown(LEFT_ARROW)) this.dir += 0.05;
		if(keyIsDown(RIGHT_ARROW)) this.dir -= 0.05;
		
		var forwardSpeed = 0;
		if(keyIsDown(87)) forwardSpeed = this.speed;
		if(keyIsDown(83)) forwardSpeed = -this.speed;
		
		var sideSpeed = 0;
		if(keyIsDown(65)) sideSpeed = this.speed;
		if(keyIsDown(68)) sideSpeed = -this.speed;
		
		// Clamp the max speed at which the player can move (important because of the colision engine)
		var maxSpeed = this.radius-1;
		forwardSpeed = constrain(forwardSpeed, -maxSpeed, maxSpeed);
		sideSpeed = constrain(sideSpeed, -maxSpeed, maxSpeed);
		
		// Apply Speed
		this.x += forwardSpeed*cos(player.dir) + sideSpeed*cos(player.dir+radians(90));
		this.y -= forwardSpeed*sin(player.dir) + sideSpeed*sin(player.dir+radians(90));
		
		// Collisions
		levelCollisions(this);
	}
}