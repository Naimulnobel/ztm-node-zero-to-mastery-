const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

const port = 3000;

server.listen(port)
console.log(`listening on port ${port}`);
let readyPlayerCount = 0;
io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    socket.on('ready', () => {
        console.log('player is ready', socket.id);
        readyPlayerCount++;
        if (readyPlayerCount === 2) {
            io.emit('startGame', socket.id);
        }
    })
})