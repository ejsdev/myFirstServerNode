/* Routing 01 */
 
const express =require('express');
const server =express();

/* Ruta / */
server.get('/', function(req, res){
    res.send('<h1>Node + Express</h1>');
    res.end();
});
/*Ruta /info */
server.get('/info', function(req, res){
    res.send('<h1>Seccion info</h1>');
    res.end();
});

/*Ruta /contacto */
server.get('/contacto', function(req, res){
    res.send('<h1>Seccion de contacto</h1>');
    res.end();
});

server.get('/prueba', function(req, res){
    res.send('<h1>Seccion de prueba</h1>');
    res.end();
});

server.listen(3000, () => {
        console.log('Servidor en puerto 3000');
    });
