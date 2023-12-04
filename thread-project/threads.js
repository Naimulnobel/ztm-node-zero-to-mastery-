const { isMainThread, Worker, parentPort, workerData } = require('worker_threads');
if (isMainThread) {
    new Worker(__filename, { workerData: [7, 6, 2] });
    new Worker(__filename, { workerData: [1, 2, 3] });
    console.log(`Main ${process.pid} is running`);

} else {
    console.log(`Worker ${process.pid} started`);
    console.log(`${workerData} sorted is ${workerData.sort()}`);

}