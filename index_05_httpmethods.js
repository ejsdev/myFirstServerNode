/* Routing 01 */
 
const express =require('express');
const server =express();

/* Ruta / */
server.get('/', function(req, res){
    res.send('<h1>GET Recibido');
    res.end();
});
/*Ruta /info */
server.post('/info', function(req, res){
    res.send('Post Recibido');
    res.end();
});

/*Ruta /contacto */
server.put('/contacto', function(req, res){
    res.send('Actualización recibida');
    res.end();
});

server.delete('/prueba', function(req, res){
    res.send('Metodo DELETE valido');
    res.end();
});

server.listen(3000, () => {
        console.log('Servidor en puerto 3000');
    });
