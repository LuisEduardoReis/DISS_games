

function Sprite(ox,oy,w,h) {
	this.ox = ox;
	this.oy = oy;
	this.w = w;
	this.h = h;
	
	this.display = function(tx,ty) {
		copy(spritesImage, 
			ox,oy,w,h,
			tx-w/2,ty-h/2,w,h
			);		
	}		
}

function createSprite(x,y) {return new Sprite(48*x,48*y,48,48);}

function Animation() {
	
	this.sprites = [];
	this.timer = 0;
	this.index = 0;
	this.delay = 1 * 60;
	
	this.addFrame = function (sprite) {
		this.sprites.push(sprite);
	}
	
	this.update = function() {	
		if (this.sprites.length == 0) return;
	
		this.timer++;
		
		while (this.timer >= this.delay) {
			this.index++;
			this.timer -= this.delay;
		}
		
		while(this.index >= this.sprites.length) {
			this.index -= this.sprites.length;
		}		
	}
	
	this.display = function(tx,ty) {		
		this.sprites[this.index].display(tx,ty);
	}
	
}