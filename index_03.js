/*
const http = require("http");

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write("<h1>Hola Mundo</h1>");
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Escucha de servidor en puerto 3000');
}); 
*/
const express =require('express');
const server =express();

server.get('/', function(req, res){
    res.send('<h1>Node + Express</h1>');
    res.end();
});


server.listen(3000, () => {
        console.log('Servidor en puerto 3000');
    });
