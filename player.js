// every point inbetween grids when drawn doesn't matter
//  to smooth transition this potentially another timeout to draw animations would do the trick
//   Main loop should be only running every 1/8 second
//	  to synchronize the two an animator function taking two points to animate from would work
// 		player x, y will now be defined by where it's at on the (game ) grid not the point on canvas

let player = {"x": 0, "y": 0, "width": gridWidth, "height": gridWidth};

let speed=3;

let direction = "right";


window.onkeydown = function(evt){
	let gridPos = snapTo(player.x, player.y, player.width, player.width);
	//switch around to 
	if(evt.key == "a"){
		if(walls.filter(x => x.x == gridPos.x-1 && x.y == gridPos.y).length == 0){
			direction = "left";
		}
	}

	if(evt.key == "w"){
		if(walls.filter(x => x.x == gridPos.x && x.y == gridPos.y-1).length == 0){
			direction = "up";
		}
	}

	if(evt.key == "d"){
		if(walls.filter(x => x.x == gridPos.x+1 && x.y == gridPos.y).length == 0){
			direction = "right";
		}
	}

	if(evt.key == "s"){
		if(walls.filter(x => x.x == gridPos.x && x.y == gridPos.y+1).length == 0){
			direction = "down";
		}
	}
}

setInterval(function(){
	let gridPos = snapTo(player.x, player.y, player.width, player.width);
	switch(direction){
		case "up":
			player.y -= 1;
			
			break;
		case "left":
			
			player.x -= 1;
			
			break;
		case "down":
			player.y += 1;
			break;
		case "right":
			player.x += 1;
			break;
	}
	clear();
	drawWalls();
	drawBox(player.x*player.width, player.y*player.width, player.width, player.height);
	
}, 150);