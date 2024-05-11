import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";
import { createTestUser, removeTestUser } from "./test-util.js";

describe("Post /api/users", () => {
  afterEach(async () => {
    await removeTestUser();
  });

  it("should can register new user", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "test",
      password: "rahasia",
      name: "test",
    });

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("test");
    expect(result.body.data.password).toBeUndefined();
  });

  it("should reject if request is not valid", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "",
      password: "",
      name: "",
    });

    logger.info(result.body);

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("should can register new user", async () => {
    let result = await supertest(web).post("/api/users").send({
      username: "test",
      password: "rahasia",
      name: "test",
    });

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("test");
    expect(result.body.data.password).toBeUndefined();

    result = await supertest(web).post("/api/users").send({
        username: "test",
        password: "rahasia",
        name: "test",
      });
  
      expect(result.status).toBe(400);
      expect(result.body.errors).toBeDefined();
  });
});

describe("Post /api/users/login", () => {
    beforeEach(async () => {
        await createTestUser();
    })

    afterEach(async () => {
        await removeTestUser();
    })

    it("should can login user", async () => {
        const result = await supertest(web).post("/api/users/login").send({
            username: "test",
            password: "rahasia",
        })

        expect(result.status).toBe(200);
        expect(result.body.data.token).toBeDefined();
        expect(result.body.data.token).not.toBe("token");
    })

    it("should can login user error", async () => {
        const result = await supertest(web).post("/api/users/login").send({
            username: "",
            password: "",
        })

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    })

    it("should can login user if password wrong", async () => {
        const result = await supertest(web).post("/api/users/login").send({
            username: "test",
            password: "salah",
        })

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    })

    it("should can login user if password wrong", async () => {
        const result = await supertest(web).post("/api/users/login").send({
            username: "salah",
            password: "rahasia",
        })

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    })
})
