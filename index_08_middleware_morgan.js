 
const express =require('express');
const morgan = require('morgan');
const server =express();



server.use(express.json());
/*server.use(logger);*/

/* middleware */
server.use(morgan('dev'));


/*function logger(req,res, next){
    /*ver por consola dirección pedida por el usuario
    console.log(`Ruta recibida: ${req.protocol} ://${req.get('host')}${req.originalUrl}`);
    next();
}*/

server.all('/user', function(req, res, next){
    console.log('Pasando por consola');
    next();
    
});

/* Ruta / */
server.get('/user', function(req, res){
    res.json({
        username:'Luis',
        lastname:'Lopez'
    });
});

server.post('/user/:id', function(req, res){
    console.log(req.body);
    console.log(req.params);
    res.send('Post recibido');
});


server.listen(3000, () => {
        console.log('Servidor en puerto 3000');
    });
