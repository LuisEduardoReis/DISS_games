var MOVE_SPEED = TILE_SIZE/12;
var JUMP_SPEED = -TILE_SIZE/2;
var GRAVITY = TILE_SIZE/64;

function Player(level) {

	this.level = level;
	
	this.x = level.spawn.x;
	this.y = level.spawn.y;
	this.dx = 0;
	this.dy = 0;
	this.radius = Math.round(0.3*TILE_SIZE);
	
	this.update = function() {
	// Movement
		// Apply gravity
		this.dy += GRAVITY;
		
		// Jump if a solid tile is underfoot
		var tileUnderfoot = this.level.getTile(
			Math.floor(this.x/TILE_SIZE), 
			Math.floor((this.y+this.radius+1)/TILE_SIZE)
		);		
		if (keyIsDown(UP_ARROW) && tileUnderfoot.solid) {
			jumpSound.play();
			this.dy = JUMP_SPEED;
		}
		
		// Move left and right
		if (keyIsDown(LEFT_ARROW)) this.dx = -MOVE_SPEED;
		else if (keyIsDown(RIGHT_ARROW)) this.dx = MOVE_SPEED;
		else this.dx = 0;	
		
		// Clamp the max speed at which the player can move (important because of the colision engine)
		var maxSpeed = this.radius-1;
		this.dx = constrain(this.dx, -maxSpeed, maxSpeed);
		this.dy = constrain(this.dy, -maxSpeed, maxSpeed);
		
		// Apply Speed
		this.x += this.dx;
		this.y += this.dy;
		
	// Collisions
		
		// Calculate in which tile the player is in
		var xc = Math.floor(this.x / TILE_SIZE);
		var yc = Math.floor(this.y / TILE_SIZE);
		
		// Check if inside solid block to fix weird corner cases
		if (this.level.getTile(xc,yc).solid) {
			this.x -= this.dx;
			xc = Math.floor(this.x / TILE_SIZE);
		}
		
		// Calculate the player's position relative to the cell they're in
		var xr = this.x - (xc * TILE_SIZE);
		var yr = this.y - (yc * TILE_SIZE);
		
		// Check if bumping left
		if (this.level.getTile(xc-1,yc).solid && xr <= this.radius) {
			xr = this.radius;
			this.dx = 0;
		}
		// Check if bumping right
		if (this.level.getTile(xc+1,yc).solid && xr >= TILE_SIZE - this.radius) {
			xr = TILE_SIZE - this.radius;
			this.dx = 0;
		}
		// Update x. X-axis is now resolved
		this.x = (xc * TILE_SIZE) + xr;		
		xc = Math.floor(this.x / TILE_SIZE);
		
		// Check if bumping up
		if (this.level.getTile(xc,yc-1).solid && yr <= this.radius) {
			yr = this.radius;
			this.dy = 0;
		}
		
		// Check if bumping down
		if (this.level.getTile(xc,yc+1).solid && yr >= TILE_SIZE - this.radius) {
			yr = TILE_SIZE - this.radius;
			this.dy = 0;	
		}		
		
		// Update y. Y-axis is now resolved
		this.y = (yc * TILE_SIZE) + yr;
	}
	
	this.display = function() {
		noStroke();
		fill(255,0,0);
		ellipse(this.x,this.y, 2*this.radius,2*this.radius);
	}
	
}