import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able to connect", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "001",
        email: "billy@b.com",
        name: "billy",
        phone: "08123456789",
      },
    });

    expect(customer.id).toBe("001");
    expect(customer.email).toBe("billy@b.com");
    expect(customer.name).toBe("billy");
    expect(customer.phone).toBe("08123456789");
  });

  it("should be able to update", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "billy update",
      },
      where: {
        id: "001",
      },
    });

    expect(customer.name).toBe("billy update");
  });

  it("should be able to read", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "001",
      },
    });

    expect(customer.name).toBe("billy update");
  });

  it("should be able to delete", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "001",
      },
    });

    expect(customer.id).toBe("001");
    expect(customer.email).toBe("billy@b.com");
    expect(customer.name).toBe("billy update");
    expect(customer.phone).toBe("08123456789");
  });
});
