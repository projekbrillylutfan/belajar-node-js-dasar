import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express()
// app.use(express.json())
app.use(express.static(__dirname + "/static"))

app.get("/", (req, res) => {
    res.send("hello response")
})

test('static file', async () => { 
    let response = await request(app)
    .get("/")
    expect(response.text).toBe("hello response")

    response = await request(app)
    .get("/contoh.txt")
    expect(response.text).toContain("hello static")
 })

 test('static file prefix', async () => { 
    const app = express()
    app.use("/static", express.static(__dirname + "/static"))

    app.get("/", (req, res) => {
        res.send("hello response")
    })

    let response = await request(app)
    .get("/")
    expect(response.text).toBe("hello response")

    response = await request(app)
    .get("/static/contoh.txt")
    expect(response.text).toContain("hello static")
  })