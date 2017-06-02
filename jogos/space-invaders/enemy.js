
var enemySprites = [];
for(var i = 0; i < 6; i++) enemySprites.push(createSprite(i,0));


function Enemy(type) {
	
	this.x = width/2;
	this.y = height - 48;
	this.w = 24;
	this.h = 32;
		
	this.remove = false;
	
	this.type = type;
	this.animation = new Animation();
		this.animation.addFrame(enemySprites[2*type]);
		this.animation.addFrame(enemySprites[2*type+1]);
		this.animation.delay = 0.5 * 60;
		
	this.update = function() {
		this.animation.update();
	}
	
	this.display = function() {
	// Display
		this.animation.display(this.x,this.y);	
	}
	
	this.collide = function(other) {
		if (other.constructor.name == "Bullet") {
			this.remove = true;
			other.remove = true;
		}
	}
	
}