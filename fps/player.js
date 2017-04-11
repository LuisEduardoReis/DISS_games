var MOVE_SPEED = TILE_SIZE/12;
var JUMP_SPEED = -TILE_SIZE/2;
var GRAVITY = TILE_SIZE/64;

function Player() {
	
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
		
		// Calculate in which tile the player is in
		var xc = Math.floor(this.x / TILE_SIZE);
		var yc = Math.floor(this.y / TILE_SIZE);
		
		// Check if inside solid block to fix weird corner cases
		if (level.getTile(xc,yc).solid) {
			this.x = px;
			xc = Math.floor(this.x / TILE_SIZE);
		}
		
		// Calculate the player's position relative to the cell they're in
		var xr = this.x - (xc * TILE_SIZE);
		var yr = this.y - (yc * TILE_SIZE);
		
		// Check if bumping left
		if (level.getTile(xc-1,yc).solid && xr <= this.radius) {
			xr = this.radius;
			this.dx = 0;
		}
		// Check if bumping right
		if (level.getTile(xc+1,yc).solid && xr >= TILE_SIZE - this.radius) {
			xr = TILE_SIZE - this.radius;
			this.dx = 0;
		}
		// Update x. X-axis is now resolved
		this.x = (xc * TILE_SIZE) + xr;		
		xc = Math.floor(this.x / TILE_SIZE);
		
		// Check if bumping up
		if (level.getTile(xc,yc-1).solid && yr <= this.radius) {
			yr = this.radius;
			this.dy = 0;
		}
		
		// Check if bumping down
		if (level.getTile(xc,yc+1).solid && yr >= TILE_SIZE - this.radius) {
			yr = TILE_SIZE - this.radius;
			this.dy = 0;	
		}		
		
		// Update y. Y-axis is now resolved
		this.y = (yc * TILE_SIZE) + yr;
	}

	
}