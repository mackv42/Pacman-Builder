let canvasWidthInput = document.getElementById("canvasWidth");
let canvasHeightInput = document.getElementById("canvasHeight");
let buildBtn = document.getElementById("build");
let playBtn = document.getElementById("play");


canvasWidthInput.onchange = function(){
	canvas.width = this.value;
}

canvasHeightInput.onchange = function(){
	canvas.height = this.value;
}