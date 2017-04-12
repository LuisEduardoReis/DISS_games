function Demon() {
	
	var MOVE_SPEED = TILE_SIZE/12;
	var JUMP_SPEED = -TILE_SIZE/2;
	var GRAVITY = TILE_SIZE/64;
	
	this.x = this.px = 0;
	this.y = this.py = 0;
	this.dx = 0;
	this.dy = 0;
	this.radius = Math.round(0.3*TILE_SIZE);
	this.dir = 0;
	
	this.update = function() {
		// Movement
		this.px = this.x;
		this.py = this.y;
	
		this.dir += 0.01;
		// Apply Speed
		var fs = 0;//MOVE_SPEED;
		this.x += fs*cos(this.dir);
		this.y -= fs*sin(this.dir);
		
		// Collisions
		collisions(this);
	}
	
	this.display = function() {
		push();
		translate(this.x,TILE_SIZE/2,this.y);
		ambientMaterial(255,0,0);
		ellipsoid(this.radius,this.radius,this.radius);
		pop();
	}
}