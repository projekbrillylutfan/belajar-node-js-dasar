import express from "express";
import request from "supertest";
import expressFileUpload from "express-fileupload";
// import mustacheExpress from "mustache-express";

const app = express();
app.use(express.json());
app.use(expressFileUpload());
app.use(express.urlencoded({ extended: false }));


app.post("/", async (req, res) => {
    const textFile = req.files.article
    await textFile.mv(__dirname + "/upload/" + textFile.name)

    res.send(`hello ${req.body.name}, you uploaded ${textFile.name}`)
})

test("file upload test", async () => {
    const response = await request(app)
    .post("/")
    .field("name", "eko")
    .attach("article", __dirname + "/contoh.txt")

    expect(response.text).toBe("hello eko, you uploaded contoh.txt")
});
