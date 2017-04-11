var Tiles = {
	AIR: {solid: false},
	BLOCK: {solid: true}	
}

function Level(img) {
	this.width = img.width;
	this.height = img.height;
	this.spawn = {x: 0, y:0};
	this.tiles = [];
	
	// Getters and Setters
	this.getTile = function(x,y) {
		if (x < 0 || y < 0 || x >= this.width || y >= this.height) return Tiles.AIR;
		return this.tiles[y*this.width + x];
	}
	this.setTile = function(x,y,t) {
		this.tiles[y*this.width + x] = t;
	}
	
	// Iterate over image to create map
	for(var iy = 0; iy < this.height; iy++)
	for(var ix = 0; ix < this.width; ix++) {
		var color = img.get(ix,iy);
		// Black
		if (color[0] == 0 && color[1] == 0 && color[2] == 0) {
			this.setTile(ix,iy,Tiles.BLOCK);
		} else
		// Red
		if (color[0] == 255 && color[1] == 0 && color[2] == 0) {
			this.spawn.x = (ix+0.5) * TILE_SIZE;
			this.spawn.y = (iy+0.5) * TILE_SIZE;
			this.setTile(ix,iy,Tiles.AIR);
		} else {
		// White
			this.setTile(ix,iy,Tiles.AIR);
		}
		
	}
	
	this.display = function() {
		texture(stoneTex);
		
		push();
		translate(TILE_SIZE/2,TILE_SIZE/2,TILE_SIZE/2);
		// Iterate over map and draw blocks
		for(var iy = 0; iy < this.height; iy++)
		for(var ix = 0; ix < this.width; ix++) {			
			if (this.getTile(ix,iy) == Tiles.BLOCK) {
				push();
				translate(ix*TILE_SIZE,0,iy*TILE_SIZE);
				box(TILE_SIZE);
				pop();
			}
		}
		pop();
	}
}