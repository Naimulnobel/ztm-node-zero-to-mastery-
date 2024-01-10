const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const PORT = 3000;
const app = express();
app.use(helmet());
const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
}
function checkLoggedIN(req, res, next) {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        res.status(401).json({
            error: 'you must be logged in to access this resource'
        })
    }
    next();
}
app.get('/auth/google', (req, res) => {

});
app.get('/auth/google/callback', (req, res) => {

});
app.get('/auth/logout', (req, res) => {

});
app.get('/secret', checkLoggedIN, (req, res) => {
    res.send('your personal secret value is 42');
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}
);

https.createServer(
    {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')

    }, app
).listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})