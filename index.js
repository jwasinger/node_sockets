var WebSocketServer = require('ws').Server;
var http = require('http');

var httpServer = http.createServer(function(request, response)
{
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("Hello World!");
    response.end();
}).listen(1334);

//wsServer = new WebSocketServer({ 
//    server: httpServer 
//});

//wsServer.on('request', function(request)
//{
//    var connection = request.accept(null, request.origin); 
//});


