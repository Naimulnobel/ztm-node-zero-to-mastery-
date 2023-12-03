const express = require('express');
const cluster = require('cluster');
const { log } = require('console');

const app = express();
const port = 3000;
function delay(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {
        // do nothing
    }
}
app.get('/', (req, res) => {
    res.send(`performance-example${process.pid}`);
})
app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`ding dong ${process.pid}`);
});
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker ${process.pid} started`);
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}
