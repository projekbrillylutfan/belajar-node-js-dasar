import { prismaClient } from "../src/prisma-client"

describe("prisma client", () => {
    it("should be able to groupby", async () => {
        const result = await prismaClient.product.groupBy({
            by: ["category"],
            _min : {
                price : true
            },
            _max : {
                price : true
            },
            _avg : {
                price : true
            }
        });

        for (const item of result) {
            console.info(`category: ${item.category}, min: ${item._min.price}, max: ${item._max.price}, avg: ${item._avg.price}`);
        }
    })

    it("should be able to groupby with having", async () => {
        const result = await prismaClient.product.groupBy({
            by: ["category"],
            _min : {
                price : true
            },
            _max : {
                price : true
            },
            _avg : {
                price : true
            },
            having : {
                price : {
                    _avg : {
                        gt : 3000
                    }
                }
            }
        })

        console.info(result)
    })
})