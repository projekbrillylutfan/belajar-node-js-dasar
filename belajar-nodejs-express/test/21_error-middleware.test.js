import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express()
// app.use(express.json())

const errorMiddleware = (err, req, res, next) => {
    res.status(500).send(`terjadi error: ${err.message}`)
}

app.get("/", (req, res) => {
    throw new Error("upss")
})

app.use(errorMiddleware);

test('Error Middleware', async () => { 
    const response = await request(app)
    .get("/")
    expect(response.status).toBe(500)
    expect(response.text).toBe("terjadi error: upss")
 })