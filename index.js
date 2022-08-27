 
const { application } = require('express');
const express =require('express');
const morgan = require('morgan');
const server =express();

//Settings
server.set("appName","Prueba");
server.set("view engine","ejs");


//middleware
server.use(express.json());
server.use(morgan('dev'));



server.get('/', function(req, res) {
    const datos = [{nombre:"Luis"},{nombre:"Mario"},{nombre:"Maria"}];
    res.render('index.ejs',{personas: datos});
});

//directorio public, archivo index.html
server.use(express.static("public"));

server.listen(3000, () => {
        console.log(server.get("appName"));
        console.log('Servidor en puerto 3000');
    });
