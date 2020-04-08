
const socket = io("https://test-0605.herokuapp.com");

socket.on("addPlayer", function(data) {
    GAME.addPlayer(data.id, new Vector2d(data.x,data.y),data.isLocal);
});  
socket.on('removePlayer', function(playerId){ 
    GAME.removePlayer(playerId);
});
socket.on('updateState', function(data){ 
    GAME.stateUpdate(data);
}); 
socket.on('sync', function(data){ 
    GAME.receiveData(data);
}); 
$(document).ready( function(){  
    socket.emit('joinGame');
});