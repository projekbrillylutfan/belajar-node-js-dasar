import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able to create and select", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "ayam",
        email: "ayam@b.com",
        phone: "081234567891122334455",
        name: "ayam",
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(customer.id).toBe("ayam");
    expect(customer.name).toBe("ayam");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();

    console.info(customer);
  });

  it("should be able to find many with select", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
