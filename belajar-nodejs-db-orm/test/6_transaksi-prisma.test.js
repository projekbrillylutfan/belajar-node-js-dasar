import { prismaClient } from "../src/prisma-client"

describe("prisma client", () => {
    it("should be sequential transaction", async () => {
        const [eko, kurniawan] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id: "001",
                    email: "billy@b.com",
                    name: "eko khannedy",
                    phone: "08123456789",
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: "002",
                    email: "billy111@b.com",
                    name: "Eko Kurniawan",
                    phone: "08123456789999",
                }
            })
        ])

        expect(eko.name).toBe("eko khannedy")
        expect(kurniawan.name).toBe("Eko Kurniawan")
    })

    it("should be interctive transaction", async () => {
        const [eko, kurniawan] = await prismaClient.$transaction(async (prisma) => {
            const eko = await prisma.customer.create({
                data: {
                    id: "003",
                    email: "billy111111@b.com",
                    name: "eko khannedy",
                    phone: "0812345678911111",
                }
            });

            const kurniawan = await prisma.customer.create({
                data: {
                    id: "004",
                    email: "billy11111111@b.com",
                    name: "Eko Kurniawan",
                    phone: "081234567899991111",
                }
            })

            return [eko, kurniawan];
        })

        expect(eko.name).toBe("eko khannedy")
        expect(kurniawan.name).toBe("Eko Kurniawan")
    })
})