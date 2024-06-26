import { sumAll } from "../src/sum";

const table = [
    {
        numbers: [10, 10, 10],
        expected: 30
    },
    {
        numbers: [10, 10, 10, 10, 10],
        expected: 50
    },
    {
        numbers: [10, 10, 10, 10, 10, 10, 10],
        expected: 70
    }
];

test.each(table)('test sumAll($numbers) should return $expected', ({numbers, expected}) => { 
    expect(sumAll(numbers)).toBe(expected)
 })