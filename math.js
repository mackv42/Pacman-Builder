//checks if number is inbetween two scalars
function inbetween(n, p1, p2){
	return n >= p1 && n <= p2;
}


// checks if a point is inbounds of a box
function inBounds(x,y, box){
	return inbetween(x, box.x, box.x+box.width) && inbetween(y, box.y, box.y+box.height);
}