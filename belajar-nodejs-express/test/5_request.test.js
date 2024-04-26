import express from "express";
import request from "supertest";

test("test request url", async () => {
  const app = express();

  app.get("/", (req, res) => {
    res.send(`hello ${req.query.firstName} ${req.query.lastName}`);
  });

  const response = await request(app)
  .get("/")
  .query({ firstName: "billy", lastName: "ayam" });

  expect(response.text).toBe("hello billy ayam");
});
