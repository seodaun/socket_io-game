function game(){
    this.players =[];
    this.localPlayer;
    return this;
}
game.prototype.addPlayer = function(id,pos,isLocal){
	var p = new Player(id,pos,isLocal); 
	if(isLocal){
		this.localPlayer = p;
	}else{
		this.players.push(p);  
	}
}
game.prototype.removePlayer = function(playerId){ 
	for(var p = 0;p<this.players.length;p++){  
		if(this.players[p].id == playerId){ 
			this.players.splice(p,1);   
			break;
		}
	}
} 
game.prototype.sendData = function(){
	var gameData = {};
	var p = {
		id: this.localPlayer.id,
		pos: this.localPlayer.pos, 
	};
	gameData.player = p;      
	socket.emit('sync', gameData);
} 
game.prototype.receiveData= function(serverData){
	var game  =this;
	serverData.players.forEach( function(serverPlayer){ 
		var found = false;
			game.players.forEach( function(clientPlayer){
			if(clientPlayer.id === serverPlayer.id){
				clientPlayer.pos = serverPlayer.pos; 
				found = true;
			}
		});
		if(!found &&
			(game.localPlayer == undefined || serverPlayer.id != game.localPlayer.id)){
			game.addPlayer(serverPlayer.id, serverPlayer.pos, false);
		}
	}); 
}
game.prototype.stateUpdate = function(data){
	for(var p = 0;p<this.players.length;p++){  
		if(this.players[p].id == data.id){  
			this.players[p].pos = data.pos;
		}
	} 
} 
const GAME = new game();