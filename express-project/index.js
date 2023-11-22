const express = require('express');
const app = express();
const port = 3000;
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

app.get('/friends', (req, res) => {
    res.send(friends);
})
app.get('/friends/:id', (req, res) => {
    const friendIndex = +req.params.id;
    res.send(friends[friendIndex]);
})
app.post('/friends', (req, res) => {
    friends.push(req.body);
    res.send(friends);
})
app.get('/message', (req, res) => {
    res.send('Hello World!');
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
})