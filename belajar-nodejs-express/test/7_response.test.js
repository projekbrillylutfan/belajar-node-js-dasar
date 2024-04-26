import express from "express";
import request from "supertest";

test("Response", async () => {
  const app = express();

  app.get("/", (req, res) => {
    res.send("hello response");
  });

  const response = await request(app)
  .get("/")

  expect(response.text).toBe("hello response");
});
