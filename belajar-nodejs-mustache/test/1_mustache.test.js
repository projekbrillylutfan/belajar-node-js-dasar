import Mustache from "mustache";

test('Menggunakan Mustache', () => { 
    const data = Mustache.render("hello {{name}}", { name: "Mustache" });

    expect(data).toBe("hello Mustache");
 })