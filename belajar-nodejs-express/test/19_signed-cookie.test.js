import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express()
app.use(cookieParser("RAHASIA"))
app.use(express.json())

app.get("/", (req, res) => {
    const name = req.signedCookies["Login"]
    res.send(`hello ${name}`)
})

app.post("/", (req, res) => {
    const name = req.body.name;
    res.cookie("Login", name, {path: "/", signed: true})
    res.send(`hello ${name}`)
})

test('Cookie Read', async () => { 
    const response = await request(app)
    .get("/")
    .set("Cookie", "Login=s%3Aeko.6YTcDKCTy35QoMqRJfnCR7KvnKMxOEQ2DiTpmqskOCs; Path=/")

    expect(response.text).toBe("hello eko")
 })

test('signed cookie',async () => { 
    const response = await request(app)
    .post("/")
    .send({name: "eko"})
    console.info(response.get('Set-Cookie').toString())
    expect(response.get('Set-Cookie').toString()).toContain("eko")
    expect(response.text).toBe("hello eko")
 })