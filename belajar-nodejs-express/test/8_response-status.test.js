import express from "express";
import request from "supertest";

test("Response", async () => {
  const app = express();

  app.get("/", (req, res) => {
    if (req.query.name) {
      res.status(200).send(`hello ${req.query.name}`);
    } else {
      res.status(400).end();
    }
  });

  let response = await request(app).get("/").query({ name: "billy" });

  response = await request(app).get("/");

  expect(response.status).toBe(400);
});
