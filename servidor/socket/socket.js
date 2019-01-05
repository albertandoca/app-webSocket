const { io } = require('../server');
io.on('connection', (client) => {
    console.log('Cliente on line');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido al servidor web-socket'
    })

    client.on('disconnect', () => {
        console.log('Cliente off line');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /* if(data.usuario){
            callback({
                respuesta: 'ok'
            })
        } else {
            callback({
                respuesta:'NO ok'
            })
        } */
    });


});
