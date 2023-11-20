const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello World!' }));
});
server.listen(8000, () => {
    console.log('Server is running on port 8000...');
})