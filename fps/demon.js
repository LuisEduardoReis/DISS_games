function Demon() {
	
	this.x = this.px = 0;
	this.y = this.py = 0;
	this.dx = 0;
	this.dy = 0;
	this.radius = round(0.5*TILE_SIZE);
	this.dir = 0;
	this.dead = false;
	this.speed = TILE_SIZE/64;
	
	this.update = function() {
		// Rotate towards player
		this.dir = atan2(this.x - player.x, this.y - player.y) + radians(90);
		
		if (!this.dead) {
			// Movement
			this.px = this.x;
			this.py = this.y;		
			
			// Apply Speed
			if (dist(this.x, this.y, player.x, player.y) > this.radius) {
				var forwardSpeed = this.speed;
				this.x += forwardSpeed*cos(this.dir);
				this.y -= forwardSpeed*sin(this.dir);
			}
			
			// Level Collisions
			levelCollisions(this);
			
			// Bullet Collisions
			for(var i = 0; i < bullets.length; i++) {
				var bullet = bullets[i];
				if (dist(this.x,this.y,bullet.x,bullet.y) < this.radius + bullet.radius) {
					this.dead = true;
					bullet.remove = true;
				}
			}
		}
	}
	
	this.display = function() {
		push();
			translate(this.x,-TILE_SIZE/2,this.y);			
			rotateY(this.dir - radians(90));
			
			spriteMaterial();
			
			if (this.dead) 
				texture(demonDeadTex);		
			else 
				texture(demonTex);
			
			plane(TILE_SIZE);
		pop();
	}
}