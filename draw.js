function clear(){
	context.fillStyle = "#FFFFFF";
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBox(x, y, width, height){
	context.fillStyle = "green";
	context.fillRect(x, y , width, height);
}


//width and height of grid
function snapTo(x, y, width, height){
	// returns rect snapped to closest min divisible point
	return new Object({"x": Math.floor(x/width)*width, "y": Math.floor(y/height)*height,
						"width": width, "height": height});
}



function drawBoxToGrid(x, y, width, height){
	//getting canvas w and h
	// dividing it by width and height
	//  x, y snaps to closest min divisible point 
}