import { prismaClient } from "../src/prisma-client"

describe("prisma client", () => {
    it("should be able to agregate", async () => {
        const result = await prismaClient.product.aggregate({
            _min : {
                price : true
            },
            _max : {
                price : true
            },
            _avg : {
                price : true
            }
        })

        expect(result._min.price).toBe(1000)
        expect(result._max.price).toBe(5000)
        expect(result._avg.price).toBe(3000)
    })
})