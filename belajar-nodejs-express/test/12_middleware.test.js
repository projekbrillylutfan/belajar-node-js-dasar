import express from "express";
import request from "supertest";

const logger = (req, res, next) => {
    console.info(`Receive request: ${req.method} ${req.originalUrl}`);
    next();
}

const addPoweredHeader = (req, res, next) => {
    res.set("X-Powered-By", "Express");
    next();
}

const apiKeyMiddleware = (req, res, next) => {
    if (req.query.apiKey) {
        next();
    } else {
        res.status(401).end();
    }
}

const requestTimeMiddleware = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}

test("Response Middleware", async () => {
  const app = express();
  app.use(logger);
  app.use(addPoweredHeader);
  app.use(apiKeyMiddleware);

  app.get("/", (req, res) => {
    res.send("hello response")
  });

  const response = await request(app).get("/");

//   expect(response.get("X-Powered-By")).toBe("Express");
//   expect(response.text).toBe("hello response")
  expect(response.status).toBe(401);
});

test('manipulasi obje', async () => { 
    const app = express();
    app.use(requestTimeMiddleware);
    app.get('/', (req, res) => {
        res.send(`hello today is ${req.requestTime}`)
    })

    const response = await request(app).get('/')
    expect(response.text).toContain('hello today is')
    console.info(response.text)
 })
