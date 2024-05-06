import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able to execute sql", async () => {
    const id = "1";
    const name = "eko";

    const impacted =
      await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name})`;
    expect(impacted).toBe(1);
  });
});
