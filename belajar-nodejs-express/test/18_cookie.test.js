import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express()
app.use(cookieParser())
app.use(express.json())

app.get("/", (req, res) => {
    const name = req.cookies["name"]
    res.send(`hello ${name}`)
})

app.post("/login", (req, res) => {
    const name = req.body.name;
    res.cookie("Login", name, {path: "/"})
    res.send(`hello ${name}`)
})

test('Cookie Read', async () => { 
    const response = await request(app)
    .get("/")
    .set("Cookie", "name=eko;author=billy")

    expect(response.text).toBe("hello eko")
 })

 test('Cookie Write', async () => { 
    const response = await request(app)
    .post("/login")
    .send({name: "brilly"})

    expect(response.get('Set-Cookie').toString()).toContain("brilly")
    expect(response.text).toBe("hello brilly")
 })