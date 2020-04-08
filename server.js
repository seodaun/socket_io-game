var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 8080; 

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
    console.log(`${socket.id} has joined!`);
});
http.listen(port, function () {
    console.log('server on!');
    console.log('http://localhost:'+port);
}); 
