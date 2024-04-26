import express from "express";
import request from "supertest";

test("test query param", async () => {
  const app = express();

  app.get("/", (req, res) => {
    res.send(`Hello ${req.query.name}`);
  });

  const response = await request(app).get("/").query({ name: "billy" });

  expect(response.text).toBe("Hello billy");
});
