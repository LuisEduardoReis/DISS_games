var MOVE_SPEED = 10;
var BULLET_SPEED = 10;

var playerSprite = createSprite(0,1);
var bulletSprite = createSprite(1,1);

function Player() {
	
	this.x = width/2;
	this.y = height - 48;
	this.w = 48;
	this.h = 48;
		
	this.remove = false;	
	
		
	this.update = function() {
	// Movement		
		// Move left and right
		if (keyIsDown(LEFT_ARROW)) this.x -= MOVE_SPEED;
		else if (keyIsDown(RIGHT_ARROW)) this.x += MOVE_SPEED;
		
		// Constrain left and right
		this.x = constrain(this.x, 24, width-24);
		
		
	// Fire
		if (keyIsDown(32) && bullet == null) {
			bullet = new Bullet(this.x, this.y);
			entities.push(bullet);
		}
			
	}
	
	this.display = function() {
	// Display
		playerSprite.display(this.x,this.y);	
	}
}


function Bullet(x,y) {
	
	this.x = x;
	this.y = y;
	this.w = 4;
	this.h = 24;
	
	this.remove = false;
	
		
	this.update = function() {
		this.y -= BULLET_SPEED;
		if (this.y < 48) this.remove = true;
	}
	
	this.display = function () {
		bulletSprite.display(this.x,this.y);
	}	
	
	this.destroy = function() {		
		bullet = null;
	}
}