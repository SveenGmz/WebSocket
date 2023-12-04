
var express = require('express');
var app = express();

/* Aqui estara toda la funcionalidad de los socket, es recomendable usar el moudlo http
   para pasarle la app a express y manejar bien http */
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static('public'));

app.get('/', function(req, res){
    res.status(200).send("Hola mundo");
});

/* De esta forma activamos socket para que este escuchando mandamos un mensaje de control por consola para saber que pasa y tenemos que hacer que el mensaje venga del navegador web
   mediante html y JS */
io.on('connection' , function (socket){
    console.log('Alguien se ha conectado con socket');

    //Controlador de eventos del cliente mediante sockets
    socket.emit('messages', {
        id: 1,
        texto: "Hola soy un mensaje",
        autor: "Iram Gomez Sanchez"
    });
});

server.listen(3005, function(){
    console.log("El servidor esta corriendo en http://localhost:3005");
});