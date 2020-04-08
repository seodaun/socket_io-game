// server.js

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
function GameServer(){
    this.players = [];
}
GameServer.prototype = {
    addPlayer: function(player){
        this.players.push(player);
    },
    removePlayer: function(playerId){
        for(var p = 0; p <this.players.length;p++){
            this.players.splice(p,1);
        }
    },
    syncPlayer: function(newPlayerData){
		this.players.forEach( function(player){
			if(player.id == newPlayerData.id){
				player.pos = newPlayerData.pos;  
			}
		});
    },
    getData: function(){
		var gameData = {};
		gameData.players = this.players; 
		return gameData;
	},
}
app.use(express.static(__dirname + '/public'));
var game = new GameServer();
io.on('connection', function (socket) {
    console.log(`${socket.id} has joined!`);

    socket.on('joinGame', function(){ 
        //현재 연결된 클라이언트
        socket.emit('addPlayer',{id: socket.id, x: 400,y:300,isLocal: true});
        //나를 제외한 다른 클라이언트
        socket.broadcast.emit('addPlayer',{id: socket.id, x: 400,y:300,isLocal: false});
        //서버에서 플레이어 생성
        game.addPlayer({id: socket.id, x: 400,y:300})
    })
    socket.on('sync', function(data){
		//Receive data from clients
		if(data.player != undefined){
			game.syncPlayer(data.player);
		} 
		socket.emit('sync', game.getData());
		socket.broadcast.emit('sync', game.getData()); 
	});
    socket.on('disconnect', function () {
        console.log(socket.id + 'has leaved!');
        game.removePlayer(socket.id)
        socket.broadcast.emit('removePlayer',socket.id);
    });  
    
});
var port = process.env.PORT || 8080;
http.listen(port, function () {
    console.log('server on!');
    console.log('http://localhost:'+port);
}); 
