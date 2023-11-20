const http = require('http');
const server = http.createServer();
const friends = [
    {
        id: 0,
        name: 'Nicola Tesla'
    },
    {
        id: 1,
        name: 'Albert Einstein'
    },
    {
        id: 2,
        name: 'Isaac Newton'
    }
]
server.on('request', (req, res) => {
    const items = req.url.split('/');
    if (items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3) {
            const friendIndex = +items[2];
            res.end(JSON.stringify(friends[friendIndex]));

        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (items[1] === 'message') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <head>
          <title>About</title>
          </head>
          <body>
            <ul>
                <li>Name: Aman</li>
                
            </ul>
            </body>
            </html>`);
        res.end();
    } else if (req.url === '/friends/:id') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(friends[0]));
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <head>
          <title>404</title>
          </head>
          <body>
            <h1>404 Page Not Found</h1>
            <p>Sorry, that page doesn't exist</p>
            </body>
            </html>`);
        res.end();

    }
})
server.listen(8000, () => {
    console.log('Server is running on port 8000...');
})