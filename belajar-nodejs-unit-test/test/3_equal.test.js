test("test toBe", () => {
  let name = "ayam";
  let hello = `hello ${name}`;

  expect(hello).toBe("hello ayam");
});

test("test toEquals", () => {
  let person = {
    id: "eko",
  };

  Object.assign(person, {
    name: "Eko",
  });

  expect(person).toEqual({
    id: "eko",
    name: "Eko",
  });

});
