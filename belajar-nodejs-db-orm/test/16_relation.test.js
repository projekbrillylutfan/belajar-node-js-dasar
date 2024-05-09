import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able to relation one to one", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "budi",
        customer_id: "budi",
        balance: 1000000,
      },
      include: {
        customer: true,
      },
    });

    console.log(wallet);
  });

  it("should be able to create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "joko",
        name: "joko",
        phone: "54545455584",
        email: "joko@b.com",
        wallet: {
          create: {
            id: "joko",
            balance: 200000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });

    console.log(customer);
  });

  it("shoul be able to find one to one", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "budi",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("shoul be able to find one to one with findmany include", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("shoul be able to create one to many with include", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "budi",
        title: "inssert comment",
        description: "comment description",
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
  });

  it("shoul be able to create one to many with include ", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "alex",
        name: "alex",
        email: "alex@b.com",
        phone: "646464687946468",
        comments: {
          createMany: {
            data: [
              {
                title: "comment 1",
                description: "comment 1 description",
              },
              {
                title: "comment 2",
                description: "comment 2 description",
              },
            ],
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(customer);
  });

  it("shoul be able to find many with relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: "comment 1",
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(customers);
  });
});
