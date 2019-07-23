const socket = io()

//Elementos del index.html
let message = document.getElementById('message');
let username = document.getElementById('username');
let enviar = document.getElementById('send');
let login = document.getElementById('login');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

/*var product = null;

function sub(){
product = document.getElementsByName("color)[0].value;
};*/

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