

function collisions(entity) {
	// Calculate in which tile the player is in
	var xc = Math.floor(entity.x / TILE_SIZE);
	var yc = Math.floor(entity.y / TILE_SIZE);
	
	// Check if inside solid block to fix weird corner cases
	if (level.getTile(xc,yc).solid) {
		entity.x = entity.px;
		xc = Math.floor(entity.x / TILE_SIZE);
	}
	
	// Calculate the player's position relative to the cell they're in
	var xr = entity.x - (xc * TILE_SIZE);
	var yr = entity.y - (yc * TILE_SIZE);
	
	// Check if bumping left
	if (level.getTile(xc-1,yc).solid && xr <= entity.radius) {
		xr = entity.radius;
		entity.dx = 0;
	}
	// Check if bumping right
	if (level.getTile(xc+1,yc).solid && xr >= TILE_SIZE - entity.radius) {
		xr = TILE_SIZE - entity.radius;
		entity.dx = 0;
	}
	// Update x. X-axis is now resolved
	entity.x = (xc * TILE_SIZE) + xr;		
	xc = Math.floor(entity.x / TILE_SIZE);
	
	// Check if bumping up
	if (level.getTile(xc,yc-1).solid && yr <= entity.radius) {
		yr = entity.radius;
		entity.dy = 0;
	}
	
	// Check if bumping down
	if (level.getTile(xc,yc+1).solid && yr >= TILE_SIZE - entity.radius) {
		yr = TILE_SIZE - entity.radius;
		entity.dy = 0;	
	}		
	
	// Update y. Y-axis is now resolved
	entity.y = (yc * TILE_SIZE) + yr;
}