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

message.addEventListener('keypress', function () {
    socket.emit('chat:typing' , username.value);
});

socket.on('chat:message', function (data) {
    actions.innerHTML = '';
    output.innerHTML += `<b style="color:red;"> ${data.message}</b>`
});

socket.on('chat:typing', function (data){
    actions.innerHTML = `<p><em>${data} esta escribiendo un mensaje</em></p>`
});