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
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
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
    let { name } = req.body;
    if (!name) {
        return res.status(400).json({
            message: 'required field missing'
        });
    }
    const friend = { id: friends.length, name: name };
    friends.push(friend);
    res.status(201).json(friend);

})
app.get('/message', (req, res) => {
    res.json('Hello World!');
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
})