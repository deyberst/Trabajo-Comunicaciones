const socket = io()

//Elementos del index.html
let message = document.getElementById('message');
let username = document.getElementById('username');
let button = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

button.addEventListener('click' , function () {
    socket.emit('chat:message' , {
        message : message.value,
        username: username.value
    });
});

