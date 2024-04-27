import express from "express"
import request from "supertest";


test('Request Body', async () => { 
    const app = express()
    app.use(express.json())
    app.post("/", (req, res) => {
        const name = req.body.name
        res.json({
            hello: `hello ${name}`
        })
    })

    const response = await request(app)
    .post("/")
    .set("Content-Type", "application/json")
    .send({
        name: "eko"
    })

    expect(response.body).toEqual({
        hello: "hello eko"
    })
 })

 test('Request Body Form', async () => { 
    const app = express()
    app.use(express.urlencoded({extended: false}))
    app.post("/", (req, res) => {
        const name = req.body.name
        res.json({
            hello: `hello ${name}`
        })
    })

    const response = await request(app)
    .post("/")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send("name=eko")

    expect(response.body).toEqual({
        hello: "hello eko"
    })
 })