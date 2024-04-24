import { getBalance } from "../src/11_async"

test('mock async function', async() => { 
    const from = jest.fn().mockResolvedValueOnce(1000)
    await expect(getBalance("eko", from)).resolves
    .toEqual({name: "eko", balance: 1000})

    await expect(from.mock.calls.length).toBe(1)
    await expect(from.mock.results[0].value).resolves.toBe(1000)
})

test.failing('mock async fucntion rejected', async() => { 
    const from = jest.fn().mockRejectedValueOnce(new Error("failed"))

    await getBalance("eko", from)
 })