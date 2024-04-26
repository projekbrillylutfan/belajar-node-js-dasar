import express from "express";
import request from "supertest";

test("Response Header", async () => {
  const app = express();

  app.get("/", (req, res) => {
    res.set("Content-Type", "text/html")
    res.send("<html><head><title>Hello Html</title></head></html>");
  });

  const response = await request(app).get("/");

  expect(response.get("Content-Type")).toContain("text/html");
  expect(response.text).toBe("<html><head><title>Hello Html</title></head></html>");
});
