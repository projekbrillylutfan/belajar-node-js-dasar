import { sayHello } from "../src/24_sayHello";

test("sayHello succes", () => {
    expect(sayHello("Eko")).toBe("hello Eko")
})

test.failing('sayHello failed', () => { 
    sayHello(null)
 })

 test('sayHello error ', () => { 
    expect(() => sayHello(null)).toThrow()
  })