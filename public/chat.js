const socket = io()

//Elementos del index.html
let message = document.getElementById('message');
let username = document.getElementById('username');
let enviar = document.getElementById('send');
let login = document.getElementById('login');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

//función del botón "send" para que envie el mensaje
enviar.addEventListener('click' , function () {
    socket.emit('chat:message' , {
        message : message.value,
        username: username.value
    });
});

login.addEventListener('click' , function () {

});

message.addEventListener('keypress', function () {
    socket.emit('chat:typing' , username.value);
});

//función que crea número aleatorios entre 0 y 255 para darle un color aleatorio en rgb al texto copiado
function getRandomRGBPart () {
    return Math.random() * (256 - 0);
}

socket.on('chat:message', function (data) {
    actions.innerHTML = '';
    output.innerHTML += `<b style="color:rgb(${getRandomRGBPart()},${getRandomRGBPart()},${getRandomRGBPart()});"> ${data.message}</b>`
});

socket.on('chat:typing', function (data){
    actions.innerHTML = `<p><em>${data} esta escribiendo un mensaje</em></p>`
});