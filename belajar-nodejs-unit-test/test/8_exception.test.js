import { MyException, callme } from "../src/9_exception";

test('exception', () => { 
    expect(() => callme("Eko")).toThrow()
    expect(() => callme("Eko")).toThrow(MyException)
    expect(() => callme("Eko")).toThrow("name not allowed")
 })

 test('exception not happen', () => {
     expect(callme("Joko")).toBe("hello Joko")
 })