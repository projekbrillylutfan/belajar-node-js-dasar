import express from "express";
import request from "supertest";

test("Response Header", async () => {
  const app = express();

  app.get("/", (req, res) => {
    res.set({
      "X-Powered-By": "Express",
      "X-Author": "billy",
    }).end();
  });

  const response = await request(app).get("/");

  expect(response.get("X-Powered-By")).toBe("Express");
  expect(response.get("X-Author")).toBe("billy");
});
