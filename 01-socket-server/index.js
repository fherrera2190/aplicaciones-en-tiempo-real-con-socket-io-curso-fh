const app =require('express');

const server = require('http').createServer(app);

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(8080, () => {
    console.log('listening on *:8080');
});
