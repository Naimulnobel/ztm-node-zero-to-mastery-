const path = require('path');

function getMessages(req, res) {
    // res.sendFile(path.join(__dirname, '..', "public", 'images', 'cash.jpg'));
    res.render('message', {
        warning: 'This is a warning'
    })

    // return res.json('Hello World!');
}
function postMessage(req, res) {
    console.log('updeing message');
}
module.exports = {
    getMessages,
    postMessage
}