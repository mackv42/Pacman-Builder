let hoverBox = {}
canvas.onmousemove = function(evt){
	console.log(evt.clientX);
	let point = clickPoint(evt.clientX, evt.clientY);
	hoverBox = snapTo(point.x, point.y, gridWidth, gridWidth);
	console.log(hoverBox);
	clear();
	drawBox(hoverBox.x, hoverBox.y, hoverBox.width, hoverBox.height);
	// Put other drawables here
}