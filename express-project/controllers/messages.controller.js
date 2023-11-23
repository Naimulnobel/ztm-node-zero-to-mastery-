function getMessages(req, res) {
    return res.json('Hello World!');
}
function postMessage(req, res) {
    console.log('updeing message');
}
module.exports = {
    getMessages,
    postMessage
}