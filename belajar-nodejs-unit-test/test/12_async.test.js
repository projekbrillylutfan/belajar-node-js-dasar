import { sayHelloAsync } from "../src/11_async"

test('test async function', async() => { 
    const result = await sayHelloAsync("brilly")

    expect(result).toBe("hello brilly")
 })