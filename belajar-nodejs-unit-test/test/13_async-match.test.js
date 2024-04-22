import { sayHelloAsync } from "../src/11_async"

test('test async match', async() => { 
    await expect(sayHelloAsync("brilly")).resolves.toBe("hello brilly")
    await expect(sayHelloAsync("")).rejects.toBe("name is empty")
 })