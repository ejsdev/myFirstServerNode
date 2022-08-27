/* Routing 01 */
 
const express =require('express');
const server =express();

server.use(express.json());




/* Ruta / */
server.get('/', function(req, res){
    res.send('<h1>GET Recibido');
    res.end();
});

server.get('/user', function(req, res){
    res.json({
        username:'Luis',
        lastname:'Lopez'
    });
});

/*post req body*/
server.post('/user', function(req, res){
    console.log(req.body);
    res.send('Post recibido');
});

/*post req body params*/
server.post('/user/:id', function(req, res){
    console.log(req.body);
    console.log(req.params);
    res.send('Post recibido');
});

/* metodo delete por params */
server.delete('/user/:id', function(req, res){
    
    res.send(`Usuario ${req.params.id} eliminadado`);
});

/* metodo put por params */

server.put('/user/:id', function(req, res){
    console.log(req.body);
    res.send(`Usuario ${req.params.id} Actualizado`);
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
