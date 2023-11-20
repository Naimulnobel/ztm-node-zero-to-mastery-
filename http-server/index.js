const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            message: 'Hello World!'
        }));
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <head>
          <title>About</title>
          </head>
          <body>
            <h1>About Page</h1>
            <p>This is the about page</p>
            </body>
            </html>`);
        res.end();
    }
})
server.listen(8000, () => {
    console.log('Server is running on port 8000...');
})