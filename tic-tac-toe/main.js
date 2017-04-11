var SIZE = 3;
var WIN_SIZE = 3;
var CELL_SIZE = 64;
var board;

function setup() {
	createCanvas(CELL_SIZE*SIZE,CELL_SIZE*SIZE);
	
	board = new Board();	
	
	aiMove();
}

var start, maxTime, timeup, test;
function aiMove() {
	start = Date.now();
	timeup = false;
	maxTime = 10000;
	var total_test = 0;
	
	var move = null;
	for(var i = 2; !timeup; i+=2) {
		test = 0;
		cut = false;
		console.log('Depth: ' + i);
		var ai = minimax(board, i, -2,2);
		total_test += test;
		console.log(test,ai);
		if (!timeup) move = ai;
		if (!cut) break;
	}
	if (move != null && move.move != undefined) {
		console.log(total_test);
		if (move.val == -1) console.log("I think I'm going to lose.");
		if (move.val ==  0 && (cut || timeup)) console.log("I don't know how to win.");
		if (move.val ==  0 && !(cut || timeup)) console.log("I can force a draw.");
		if (move.val ==  1) console.log("I am going to win.");
		board.setCell(move.move.x, move.move.y, board.turn);
		board.passTurn();
	}
}

function mousePressed() {
	var cellX = Math.floor(mouseX / CELL_SIZE);
	var cellY = Math.floor(mouseY / CELL_SIZE);
	if (cellX < 0 || cellY < 0 || cellX >= SIZE || cellY >= SIZE) return;
  
	board.setCell(cellX, cellY, board.turn);
	board.passTurn();
	
	aiMove();
}

function draw() {
	background(255,255,255);
	board.display();
}

function minimax(board, depth, a,b) {
	test++;
	if (!timeup && test % 10000 == 0 && (Date.now() - start > maxTime)) timeup = true;
	
	var result = board.result();
	
	if ((depth <= 0 || timeup) && result == Cells.Empty) cut = true;
	if ((depth <= 0 || timeup) || result != Cells.Empty) {
		if (result == board.turn) return {val:1};
		else if (result == 'draw' || result == Cells.Empty) return {val:0};		
		else return {val:-1};
	}	
	
	var validMoves = board.getValidMoves();
	var bestMove = null;
	var bestMoveValue = -2;
	for(var i = 0; i < validMoves.length; i++) {
		var move = validMoves[i];
		
		board.setCell(move.x, move.y, board.turn);
		board.passTurn();
		
		var val = -minimax(board, depth-1,-b,-a).val;
		
		board.setCell(move.x, move.y, Cells.Empty);
		board.passTurn();
		
		if (bestMoveValue < val) {
			bestMoveValue = val;
			bestMove = move;
		}
		a = Math.max(a,val);
		if (a >= b) break;
	}	
	
	return {
		val: bestMoveValue,
		move: bestMove
	};
}