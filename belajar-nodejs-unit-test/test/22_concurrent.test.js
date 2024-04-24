import { sayHelloAsync } from "../src/11_async";

test.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("brilly")).resolves.toBe("hello brilly");
});

test.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("ayam")).resolves.toBe("hello ayam");
});

test.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("joko")).resolves.toBe("hello joko");
});
