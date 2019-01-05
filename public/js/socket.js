var socket = io();
socket.on('connect', function () {
    console.log('Servidor web-socket on line');
});

socket.on('disconnect', function () {
    console.log('Servidor web-socket off line');
});

socket.emit('enviarMensaje', {
    usuario: 'Alberto',
    mensaje: 'mi primer mensaje'
}, function (res) {
    console.log('respuesta: ', res);
});

socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
})