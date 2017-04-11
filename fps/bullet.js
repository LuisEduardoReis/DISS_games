


function Bullet() {
	
	this.x = 0;
	this.y = 0;
	this.dir = 0;
	this.radius = Math.round(0.05*TILE_SIZE);
	this.speed = 2*this.radius;
	this.remove = false;
	
	this.update = function() {
		this.x += this.speed * cos(this.dir);
		this.y -= this.speed * sin(this.dir);
		
		if (level.getTile(Math.floor(this.x/TILE_SIZE),Math.floor(this.y/TILE_SIZE)).solid) this.remove = true;
	}
	
	this.display = function() {
		push();
		ambientMaterial(255,255,0);
		translate(this.x, TILE_SIZE/2, this.y);
		ellipsoid(this.radius,this.radius,this.radius);
		pop();
	}
	
}