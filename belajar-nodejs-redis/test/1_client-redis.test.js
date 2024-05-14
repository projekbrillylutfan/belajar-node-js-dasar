import Redis from "ioredis";

describe("redis client", () => {
  let redis = null;

  beforeEach(async () => {
    redis = new Redis({
      host: "localhost",
      port: 6379,
      db: 0,
    });
  });

  afterEach(async () => {
    await redis.quit();
  });

  it("should can ping", async () => {
    const pong = await redis.ping();
    expect(pong).toBe("PONG");
  });

  it("should support string", async () => {
    await redis.setex("name", 2, "billy");
    let name = await redis.get("name");
    expect(name).toBe("billy");

    // sleep 5 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));
    name = await redis.get("name");
    expect(name).toBeNull();
  });

  it("should support list data structure", async () => {
    await redis.rpush("name", "billy");
    await redis.rpush("name", "joko");
    await redis.rpush("name", "siti");

    expect(await redis.llen("name")).toBe(3);
    const name = await redis.lrange("name", 0, -1);
    expect(name).toEqual(["billy", "joko", "siti"]);

    expect(await redis.lpop("name")).toBe("billy");
    expect(await redis.rpop("name")).toBe("siti");
    expect(await redis.llen("name")).toBe(1);

    await redis.del("name");
  });

  it("should support set data structure", async () => {
    await redis.sadd("name", "billy");
    await redis.sadd("name", "joko");
    await redis.sadd("name", "siti");
    await redis.sadd("name", "ayam");
    await redis.sadd("name", "ayam");
    await redis.sadd("name", "goreng");

    expect(await redis.scard("name")).toBe(5);
    const names = await redis.smembers("name");
    expect(names).toEqual(["billy", "joko", "siti", "ayam", "goreng"]);

    await redis.del("name");
  });

  it("should support sorted set", async () => {
    await redis.zadd("name", 100, "Eko");
    await redis.zadd("name", 85, "Budi");
    await redis.zadd("name", 95, "Joko");

    expect(await redis.zcard("name")).toBe(3);
    const names = await redis.zrange("name", 0, -1);
    expect(names).toEqual(["Budi", "Joko", "Eko"]);

    expect(await redis.zpopmax("name")).toEqual(["Eko", "100"]);
    expect(await redis.zpopmax("name")).toEqual(["Joko", "95"]);
    expect(await redis.zpopmax("name")).toEqual(["Budi", "85"]);

    await redis.del("name");
  });

  it("should support hash data structure", async () => {
    await redis.hset("user:1", {
      id: "1",
      name: "Eko",
      email: "billy@b.com",
    });

    const user = await redis.hgetall("user:1");
    expect(user).toEqual({
      id: "1",
      name: "Eko",
      email: "billy@b.com",
    });

    await redis.del("user:1");
  });

  it("should support geo point", async () => {
    await redis.geoadd("sellers", 106.822702, -6.17759, "Toko A");
    await redis.geoadd("sellers", 106.820889, -6.174964, "Toko B");

    const distance = await redis.geodist("sellers", "Toko A", "Toko B", "km");
    expect(distance).toBe(String(0.3543));

    const result = await redis.geosearch(
      "sellers",
      "fromlonlat",
      106.821825,
      -6.175105,
      "byradius",
      5,
      "km"
    );
    expect(result).toEqual(["Toko A", "Toko B"]);
  });

  it("should support hyper log log", async () => {
    await redis.pfadd("visitors", "eko", "kurniawan", "khannedy");
    await redis.pfadd("visitors", "eko", "budi", "joko");
    await redis.pfadd("visitors", "budi", "joko", "rully");

    const total = await redis.pfcount("visitors");
    expect(total).toBe(6);
  });

  it("should support pipeline", async () => {
    const pipeline = redis.pipeline();

    pipeline.setex("name", 10, "billy");
    pipeline.setex("email", 10, "billy@b.com");

    await pipeline.exec();

    expect(await redis.get("name")).toBe("billy");
    expect(await redis.get("email")).toBe("billy@b.com");
  });

  it("should support transaction", async () => {
    const transaction = redis.multi();

    transaction.setex("name", 10, "billy");
    transaction.setex("email", 10, "billy@b.com");

    await transaction.exec();

    expect(await redis.get("name")).toBe("billy");
    expect(await redis.get("email")).toBe("billy@b.com");
  });

  it("should support publish stream", async () => {
    for (let i = 0; i < 10; i++) {
      const ayam = await redis.xadd(
        "members",
        "*",
        "name",
        `member-${i}`,
        "address",
        "indonesia"
      );
      console.log(ayam);
    }
  });

  it("should support consumer group stream", async () => {
    await redis.xgroup("CREATE", "members", "group-1", "0");
    await redis.xgroup("CREATECONSUMER", "members", "group-1", "consumer-1");
    await redis.xgroup("CREATECONSUMER", "members", "group-1", "consumer-2");
  });

  it("should support consumer stream", async () => {
    const result = await redis.xreadgroup(
      "GROUP",
      "group-1",
      "consumer-1",
      "COUNT",
      2,
      "BLOCK",
      3000,
      "STREAMS",
      "members",
      ">"
    );
    expect(result).not.toBeNull();
    console.log(JSON.stringify(result, null, 2));
  });

  it("should can subscribe pubsub", async () => {
    redis.subscribe("channel-1")
    redis.on("message", (channel, message) => {
        console.info(`message from channel ${channel}: ${message}`)
    })

    await new Promise(resolve => setTimeout(resolve, 60000))
  }, 60000)

  it("should can publish pubsub", async () => {
      for (let i = 0; i < 10; i++) {
        await redis.publish("channel-1", `message ${i}`)
      }
  })
});
