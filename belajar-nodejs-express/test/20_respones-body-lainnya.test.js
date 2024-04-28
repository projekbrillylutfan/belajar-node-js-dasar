import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/contoh.txt")
})

test('response body file', async () => {
    const response = await request(app)
    .get("/")

    expect(response.text).toContain("this is sample text")
})