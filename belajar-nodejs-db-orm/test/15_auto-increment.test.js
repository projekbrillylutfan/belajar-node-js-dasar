import { prismaClient } from "../src/prisma-client"

describe("prisma client", () => {
    it("should be able to excute sql auto increment", async () => {
        const category = await prismaClient.category.create({
            data: {
                name: "Food"
            }
        })

        console.log(category)
        expect(category).toHaveProperty("id")
    })
})