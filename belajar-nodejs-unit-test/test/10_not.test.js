test("string.not", () => {
  const name = "Brilly Lutfan Qasthari";

  expect(name).not.toBe("Eko");
  expect(name).not.toEqual("Eko");
  expect(name).not.toMatch(/Eko/);
});

test("numbers.not", () => {
  const value = 2 + 2;
  expect(value).not.toBe(5);
  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(4);
});
