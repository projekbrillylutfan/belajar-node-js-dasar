import http from "http"

// const server = http.createServer((request, response) => {
//     console.log(request.url)
//     console.log(request.method)
    
//     response.write("hello http")
//     response.end()
// })

// case kompleks
const server = http.createServer((request, response) => {
    if (request.method === "POST") {
        request.addListener("data", (data) => {
            response.setHeader("Content-Type", "application/json")
            response.write(data)
            response.end()
        })
    } else {
        response.write("hello word js susah")
        response.end()
    }
})

server.listen(3000)