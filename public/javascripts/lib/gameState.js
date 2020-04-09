
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
		if(INPUT.isClickDown()){
			
		}
	}
	if(GAME.players.length != 0){
		for(var p = 0;p<GAME.players.length;p++){ 
			GAME.players[p].Update();//외부플레이어의 정보
		}
	} 
	GAME.sendData();//자신의 정보
}

GameState.prototype.Render = function(){  
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.fillStyle = "#000000";
	Context.fillRect(0,0,800,600); 
	Context.fillStyle = "#ffffff";  
	Context.font = '15px Arial';  
	Context.fillText("들어온 플레이어: "+GAME.players.length, 10, 20);
	Context.fillText("방향키로 움직여", 10, 50);
	if(GAME.localPlayer) GAME.localPlayer.Render();
	if(GAME.players.length != 0){
		for(var p = 0;p<GAME.players.length;p++){
			GAME.players[p].Render(); 
		}
	}
} 