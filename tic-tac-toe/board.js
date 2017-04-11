
var Cells = {
	Empty: 0,
	X: 1,
	O: 2	
}

function Board() {
	this.cells = [];
	this.turn = Cells.X;
	
	for(var i = 0; i < SIZE*SIZE; i++) this.cells[i] = Cells.Empty;	
	
	
	this.getCell = function(x,y) { 
		if (x < 0 | y < 0 | x >= SIZE | y >= SIZE) return Cells.Empty;
		return this.cells[y*SIZE+x];		
	}
	this.setCell =  function(x,y, cell) { 
		if (x < 0 | y < 0 | x >= SIZE | y >= SIZE) return;
		this.cells[y*SIZE+x] = cell;		
	}
	
	this.passTurn = function() {
		if (this.turn == Cells.X) this.turn = Cells.O;
		else this.turn = Cells.X;
	}
	
	this.getValidMoves = function() {
		var moves = [];
		for(var iy = 0; iy < SIZE; iy++)
		for(var ix = 0; ix < SIZE; ix++) {
			if (this.getCell(ix,iy) == Cells.Empty) 
				moves.push({x:ix,y:iy});
		}
		return moves;
	}
	
	this.result = function() {
		var emptyCells = 0;
		for(var iy = 0; iy < SIZE; iy++)
		for(var ix = 0; ix < SIZE; ix++) {
			var cell = this.getCell(ix,iy);
			if (cell == Cells.Empty) {
				emptyCells++;
				continue;
			}
			
			for(var dy = -1; dy <= 1; dy++)
			for(var dx = -1; dx <= 1; dx++) {
				if (dx == 0 && dy == 0) continue;

				for(var i = 1; i < WIN_SIZE; i++) {
					if (this.getCell(ix+i*dx, iy+i*dy) != cell)	break;
					if (i == WIN_SIZE-1) return cell;
				}
			}			
		}
		if (emptyCells == 0) return 'draw';
		return Cells.Empty;
	}
	
	this.display = function() {
		stroke(0,0,0);
		// Draw boundaries
		for(var i = 1; i < SIZE; i++) {
			line(0,i*CELL_SIZE, CELL_SIZE*SIZE,i*CELL_SIZE);
			line(i*CELL_SIZE,0, i*CELL_SIZE,CELL_SIZE*SIZE);
		}
		
		// Draw cells
		for(var iy = 0; iy < SIZE; iy++)
		for(var ix = 0; ix < SIZE; ix++) {
			switch(this.getCell(ix,iy)) {
				case Cells.X:
					line(ix*CELL_SIZE,iy*CELL_SIZE,(ix+1)*CELL_SIZE,(iy+1)*CELL_SIZE); 
					line((ix+1)*CELL_SIZE,iy*CELL_SIZE,ix*CELL_SIZE,(iy+1)*CELL_SIZE); 
					break;
				case Cells.O:
					ellipse((ix+0.5)*CELL_SIZE,(iy+0.5)*CELL_SIZE,0.8*CELL_SIZE,0.8*CELL_SIZE);
					break;
			}
		}
	}
}