function tagFunction(array, ...args) {
  console.log(array);
  console.log(args);
}

test("tag function", () => {
  const name = "eko";

  tagFunction`hello ${name}, how are you`;
  tagFunction`hello ${name}, see you later`;
});

test("tag function sql", () => {
  const name = "eko";
  const age = 20;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
