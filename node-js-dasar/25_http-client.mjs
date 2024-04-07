import https from "https"

const url = "https://eorzs29hcnitm8o.m.pipedream.net"
const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.log(`recive data : ${data.toString()}`)
    })
})

const body = JSON.stringify({
    name: "ayam",
    lastName : "jantan"
})

request.write(body)
request.end()