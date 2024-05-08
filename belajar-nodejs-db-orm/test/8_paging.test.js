import { prismaClient } from "../src/prisma-client"

describe("prisma client", () => {
    it("should be able to paginate", async () => {
        const page1 = await prismaClient.customer.findMany({
            skip: 0,
            take: 2
        })

        expect(page1.length).toBe(2)

        const page2 = await prismaClient.customer.findMany({
            skip: 2,
            take: 2
        })

        expect(page2.length).toBe(2)

        const page3 = await prismaClient.customer.findMany({
            skip: 4,
            take: 1,
        })
        expect(page3.length).toBe(1)
    })
})