import { prismaClient } from "../src/prisma-client"

describe("prisma client", () => {
    it("should be able to create many", async () => {
        const {count} = await prismaClient.customer.createMany({
            data: [
                {
                    id: "005",
                    email: "billy1212@b.com",
                    name: "billy",
                    phone: "08123456789990",
                },
                {
                    id: "006",
                    email: "billy1111@b.com",
                    name: "billy",
                    phone: "08123456789145",
                }
            ]
        })

        expect(count).toBe(2)
    })

    it("should be able to update many", async () => {
        const {count} = await prismaClient.customer.updateMany({
            data: {
                name: "joko",
            }, 
            where: {
                email: "billy1111@b.com",
            }
        })

        expect(count).toBe(1)
    })

    it("should be able to delete many", async () => {
        const {count} = await prismaClient.customer.deleteMany({
            where: {
                name: "joko",
            }
        })

        expect(count).toBe(0)
    })

    it("should be able to read many", async () => {
        const customers = await prismaClient.customer.findMany({})
        expect(customers.length).toBe(5)
    })
})