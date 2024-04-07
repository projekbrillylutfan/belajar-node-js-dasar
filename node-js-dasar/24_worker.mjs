import { parentPort, threadId } from "worker_threads";

parentPort.addListener("message", (data) => {
    for (let i = 0; i < data; i++) {
        console.log(`worker ${threadId} : ${i}`);
        parentPort.postMessage(i);
    }
    parentPort.close();
})