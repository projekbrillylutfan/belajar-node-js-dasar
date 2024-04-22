test("array", () => {
  const names = ["brilly", "joko", "kang"];

  expect(names).toContain("brilly");
  expect(names).toEqual(["brilly", "joko", "kang"]);

  const person = [
    {
      name: "brilly",
      age: 20,
    },
  ];

  expect(person).toContainEqual({
    name: "brilly",
    age: 20,
  });
  expect(person).toEqual([
    {
      name: "brilly",
      age: 20,
    },
  ]);
});
