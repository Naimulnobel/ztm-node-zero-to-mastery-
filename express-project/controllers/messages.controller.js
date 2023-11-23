const path = require('path');

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', "public", 'images', 'cash.jpg'));

    // return res.json('Hello World!');
}
function postMessage(req, res) {
    console.log('updeing message');
}
module.exports = {
    getMessages,
    postMessage
}