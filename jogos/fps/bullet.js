


function Bullet() {
	
	this.x = 0;
	this.y = 0;
	this.dir = 0;
	this.radius = round(0.05*TILE_SIZE);
	this.speed = 2*this.radius;
	this.remove = false;
	
	this.update = function() {
		this.x += this.speed * cos(this.dir);
		this.y -= this.speed * sin(this.dir);
		
		if (level.getTile(floor(this.x/TILE_SIZE),floor(this.y/TILE_SIZE)).solid) this.remove = true;
	}
	
	this.collide = function(other) {}
	
	this.display = function() {
		push();
		translate(this.x, -TILE_SIZE/2, this.y);
		fill(255,255,0);
		ellipsoid(this.radius,this.radius,this.radius);
		pop();
	}	
}