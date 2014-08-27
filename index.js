var WebSocketServer = require('ws').Server;
var http = require('http');

var myserver = http.createServer(function(request, response)
{

});

myserver.listen(80,function() {console.log("hello world"); });

var wss = new WebSocketServer({server : myserver});

wss.on('connection', function(ws)
{
	ws.on('message', function(message)
	{
		console.log('received %s', message);
	});
	ws.send('something');
});

