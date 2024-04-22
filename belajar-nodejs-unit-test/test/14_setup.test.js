import { sum } from "../src/sum"

beforeAll(() => {
    console.log("before all")
})

afterAll(() => {
    console.log("after all")
})

// beforeEach(() => {
//     console.log("before each")
// })

// afterEach(() => {
//     console.log("after each")
// })

test('first test', () => { 
    expect(sum(10, 10)).toBe(20)
    console.info("first test")
 })

test('second test', () => { 
    expect(sum(10, 10)).toBe(20)
    console.info("second test")
 })