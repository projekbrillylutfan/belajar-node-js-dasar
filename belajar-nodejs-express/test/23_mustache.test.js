import express from "express";
import request from "supertest";
import mustacheExpress from "mustache-express";

const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress());


app.get("/", (req, res) => {
    res.render("index", {
        title: "hello mustache",
        say: "ini sebuah test"
    })
})

test("Template", async () => {
    const response = await request(app).get("/");
    console.log(response.text)
    expect(response.text).toContain("hello mustache");
    expect(response.text).toContain("ini sebuah test");
});
