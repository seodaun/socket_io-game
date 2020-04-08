
function GameState(){   
	return this;
}

GameState.prototype.Update = function(){  
	if(GAME.localPlayer){
		GAME.localPlayer.Update();
		if(INPUT.isKeyDown(37)){ 
			GAME.localPlayer.pos.x -= 5;
		}
		if(INPUT.isKeyDown(39)){
			GAME.localPlayer.pos.x += 5;
		}
		if(INPUT.isKeyDown(38)){
			GAME.localPlayer.pos.y -= 5;
		}
		if(INPUT.isKeyDown(40)){ 
			GAME.localPlayer.pos.y += 5;
		} 
	}
	if(GAME.players.length != 0){
		for(var p = 0;p<GAME.players.length;p++){ 
			GAME.players[p].Update();
		}
	} 
	GAME.sendData();
}

GameState.prototype.Render = function(){  
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.fillStyle = "#000000";
	Context.fillRect(0,0,800,600); 
	Context.fillStyle = "#ffffff";  
	Context.font = '15px Arial';  
	Context.fillText("gameobj: "+GAME.players.length, 10, 20);
	if(GAME.localPlayer) GAME.localPlayer.Render();
	if(GAME.players.length != 0){
		for(var p = 0;p<GAME.players.length;p++){
			GAME.players[p].Render(); 
		}
	}
} 