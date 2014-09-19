var WebSocketServer = require('ws').Server;
var http = require('http');

var httpServer = http.createServer(function(request, response)
{
    //do nothing    
});
httpServer.listen(1337, function() {});

wsServer = new WebSocketServer({ 
    server: httpServer
});

wsServer.on('request', function(request)
{
    console.log('connection received!');    
});
//{
//    console.log('hello world!');
//    ws.on('message', function(message)
//    {
//        console.log('received: %s', message);
//    });
//    ws.send('something');
//});

