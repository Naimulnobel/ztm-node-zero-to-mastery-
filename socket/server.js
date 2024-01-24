const api = require('./api');
const server = require('http').createServer(api);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',

    }
});
const socket = require('./socket');
const port = 3000;

server.listen(port)
console.log(`listening on port ${port}`);
socket.listen(io);