import net from "net"

const server = net.createServer((client) => {
    console.log("client connected")
    client.on("data", (data) => {
        console.log(`menerima data dari client ${data.toString()}`)
        client.write(`terima kasih ${data.toString()}\r\n`)
    })
})

server.listen(3000, `localhost`)