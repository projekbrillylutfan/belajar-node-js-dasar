import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./24_worker.mjs");
const worker2 = new Worker("./24_worker.mjs");

// worker1.addListener("message", (data) => {
//   console.log(`worker1 : ${data}`);
// });
// worker2.addListener("message", (data) => {
//   console.log(`worker2 : ${data}`);
// });

worker1.postMessage(10);
worker2.postMessage(10);
