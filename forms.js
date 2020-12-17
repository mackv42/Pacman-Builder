let canvasWidthInput = document.getElementById("canvasWidth");
let canvasHeightInput = document.getElementById("canvasHeight");
let buildBtn = document.getElementById("build");
let playBtn = document.getElementById("play");


let enemyChkBox = document.getElementById("enemyChkBox");
let playerChkBox = document.getElementById("playerChkBox");
let wallChkBox = document.getElementById("wallChkBox");

canvasWidthInput.onchange = function(){
	canvas.width = this.value;
}

canvasHeightInput.onchange = function(){
	canvas.height = this.value;
}