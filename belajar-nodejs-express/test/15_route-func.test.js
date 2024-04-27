import express from "express"
import request from "supertest";

const app = express()

app.route("/products")
.get((req, res) => {
    res.send("get products")
})
.post((req, res) => {
    res.send("post products")
})
.put((req, res) => {
    res.send("put products")
})


test('Test Route Function', async () => { 
    let response = await request(app).get("/products")
    expect(response.text).toBe("get products")

    response = await request(app).post("/products")
    expect(response.text).toBe("post products")

    response = await request(app).put("/categories")
    expect(response.text).toBe("put products")
 })