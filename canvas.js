let canvas = document.getElementById("PacMan");
let context = canvas.getContext("2d");
let gridWidth = 15;
function clickPoint(x, y){
	let clickOffset = canvas.getBoundingClientRect();
	return new Object({
		"x": Math.floor((event.clientX - clickOffset.left)),
		"y": Math.floor((event.clientY - clickOffset.top))			
	});
}