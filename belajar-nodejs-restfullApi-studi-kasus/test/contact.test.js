import supertest from "supertest";
import { createTestContact, createTestUser, getTestContact, removeAllTestContact, removeTestUser } from "./test-util.js";
import { web } from "../src/application/web.js";

describe("Post /api/contacts", () => {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeAllTestContact();
    await removeTestUser();
  });

  it("should can create contact", async () => {
    const result = await supertest(web)
      .post("/api/contacts")
      .set("Authorization", "test")
      .send({
        first_name: "test",
        last_name: "test",
        email: "test@gmail.com",
        phone: "081234567890",
      });

    expect(result.status).toBe(200);
    expect(result.body.data.id).toBeDefined();
    expect(result.body.data.first_name).toBe("test");
    expect(result.body.data.last_name).toBe("test");
    expect(result.body.data.email).toBe("test@gmail.com");
    expect(result.body.data.phone).toBe("081234567890");
  });

  it("should reject create contact invalid request", async () => {
    const result = await supertest(web)
      .post("/api/contacts")
      .set("Authorization", "test")
      .send({
        first_name: "",
        last_name: "test",
        email: "test",
        phone: "0812345678904343434343434343434343",
      });

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});

describe("Get /api/contacts/:contactID", () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
      });
    
      afterEach(async () => {
        await removeAllTestContact();
        await removeTestUser();
      });

      it("should can get contact", async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
          .get("/api/contacts/" + testContact.id)
          .set("Authorization", "test");

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe(testContact.first_name);
        expect(result.body.data.last_name).toBe(testContact.last_name);
        expect(result.body.data.email).toBe(testContact.email);
        expect(result.body.data.phone).toBe(testContact.phone);
      })

      it("should reject get contact if contact not found", async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
          .get("/api/contacts/" + testContact.id + 1)
          .set("Authorization", "test");

        expect(result.status).toBe(404);
      })
})
