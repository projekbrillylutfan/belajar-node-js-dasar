import Redis from "ioredis"

describe("redis client", () => {
    let redis = null

    beforeEach(async () => {
        redis = new Redis({
            host: "localhost",
            port: 6379,
            db: 0
        })
    })

    afterEach(async () => {
        await redis.quit()
    })

    it("should can ping", async () => {
        const pong = await redis.ping()
        expect(pong).toBe("PONG")
    })

    it("should support string", async () => {
        await redis.setex("name", 2, "billy")
        let name = await redis.get("name")
        expect(name).toBe("billy")

        // sleep 5 seconds
        await new Promise(resolve => setTimeout(resolve, 3000))
        name = await redis.get("name")
        expect(name).toBeNull()
    })

    it("should support list data structure", async () => {
        await redis.rpush("name", "billy")
        await redis.rpush("name", "joko")
        await redis.rpush("name", "siti")

        expect(await redis.llen("name")).toBe(3)
        const name = await redis.lrange("name", 0, -1)
        expect(name).toEqual(["billy", "joko", "siti"])

        expect(await redis.lpop("name")).toBe("billy")
        expect(await redis.rpop("name")).toBe("siti")
        expect(await redis.llen("name")).toBe(1)

        await redis.del("name")
    })

    it("should support set data structure", async () => {
        await redis.sadd("name", "billy")
        await redis.sadd("name", "joko")
        await redis.sadd("name", "siti")
        await redis.sadd("name", "ayam")
        await redis.sadd("name", "ayam")
        await redis.sadd("name", "goreng")

        expect(await redis.scard("name")).toBe(5)
        const names = await redis.smembers("name")
        expect(names).toEqual(["billy", "joko", "siti", "ayam", "goreng"])

        await redis.del("name")
    })

    it("should support sorted set", async () => {
        await redis.zadd("name", 100, "Eko")
        await redis.zadd("name", 85, "Budi")
        await redis.zadd("name", 95, "Joko")

        expect(await redis.zcard("name")).toBe(3)
        const names = await redis.zrange("name", 0, -1)
        expect(names).toEqual(["Budi", "Joko", "Eko"])

        expect(await redis.zpopmax("name")).toEqual(["Eko", "100"])
        expect(await redis.zpopmax("name")).toEqual(["Joko", "95"])
        expect(await redis.zpopmax("name")).toEqual(["Budi", "85"])

        await redis.del("name")
    })
})