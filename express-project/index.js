const express = require('express');
const app = express();

const port = 3000;
const messagesRouter = require('./routes/messages.router');
const friendsRouter = require('./routes/friends.router');
const path = require('path');
app.use("/static", express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${req.baseUrl} ${delta}ms`);
});

app.use('/messages', messagesRouter);
app.use('/friends', friendsRouter);
app.use('/', (req, res) => {
    res.render('index', {
        title: 'Hello World!',
        message: 'Hello there!'
    })
})
app.listen(port, () => {
    return console.log(`Server is running on port ${port}...`);
})