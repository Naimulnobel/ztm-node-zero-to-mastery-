const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
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
app.use((req, res, next) => {
    console.log(`method:${req.method} url:${req.url}`);
    next();
});

app.get('/friends', (req, res) => {
    res.json(friends);
})
app.get('/friends/:id', (req, res) => {
    const friendIndex = +req.params.id;
    const friend = friends[friendIndex];
    if (!friend) {
        return res.status(404).json({
            message: 'Friend not found'
        });

    }
    res.status(200).json(friend);
})
app.post('/friends', (req, res) => {
    let { id, name } = req.body;
    const friend = { id: +id, name: name };
    friends.push(friend);
    res.status(201).json(friend);

})
app.get('/message', (req, res) => {
    res.send('Hello World!');
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
})