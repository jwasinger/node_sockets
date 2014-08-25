var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8000});

wss.on('connection', function(ws)
{
	ws.on('message', function(message)
	{
		console.log('received %s', message);
	});
	ws.send('something');
});

var http = require("http");
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE 'html'>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello World Page</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("Hello World!");
    response.write("</body>");
    response.write("</html>");
    response.end();
});
 
 server.listen(80);
