import { sum, sumAll } from "../src/sum";

test("test 1", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

test("test 2", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

test("test 3", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

test('test sum all', () => { 
  const numbers = [1, 2, 3, 4, 5]
  expect(sumAll(numbers)).toBe(15)
 })

test("test 4", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});
