import cluster from "cluster"
import http from "http"
import os from "os"
import process from "process"

if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork()
        console.log(`primary ${process.pid}`)
    }

    cluster.addListener("exit", (worker) => {
        console.log(`worker ${worker.id} is exited`)
    })
}

if (cluster.isWorker) {
    const server = http.createServer((request, response) => {
        response.write(`response from proses ${process.pid}`)
        response.end()
        process.exit()
    })
    server.listen(3000)
    console.log(`worker ${process.pid} is running`)
}