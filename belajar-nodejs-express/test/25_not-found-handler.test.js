import express from "express";
import request from "supertest";

const app = express()


app.get("/", (req, res) => {
    res.send("hello")
})

app.use((req, res, next) => {
    res.status(404).send("404 not found")
})

test('not found handler', async () => { 
    let response = await request(app)
    .get("/")
    expect(response.text).toBe("hello")

    response = await request(app)
    .get("/billy")
    expect(response.text).toBe("404 not found")
    console.log(response.text)
 })