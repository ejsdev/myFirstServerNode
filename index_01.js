const http = require("http");
http.createServer(function(req, res){
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write("<h1>Hola Mundo</h1>");
    res.end();
}).listen(3000);