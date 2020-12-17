let hoverBox = {}
let walls = [];
let mouseDown = false;
canvas.onmousemove = function(evt){
	let point = clickPoint(evt.clientX, evt.clientY);
	hoverBox = snapTo(point.x, point.y, gridWidth, gridWidth);

	if(mouseDown){
		if(walls.filter(x => x.x == hoverBox.x && x.y == hoverBox.y).length == 0){
			walls.push(hoverBox);
		}
	}
	
	clear();
	drawBox(hoverBox.x, hoverBox.y, hoverBox.width, hoverBox.height);
	drawWalls();
}

function drawWalls(){
	for(let i=0; i<walls.length; i++){
		drawBox(walls[i].x, walls[i].y, walls[i].width, walls[i].height);
	}
}

canvas.onmousedown = function(evt){
	let point = clickPoint(evt.clientX, evt.clientY);
	let newBox = snapTo(point.x, point.y, gridWidth, gridWidth);
	mouseDown = true;
	walls.push(newBox);
}

canvas.onmouseup = function(evt){
	mouseDown = false;
}