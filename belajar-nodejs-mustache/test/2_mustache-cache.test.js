import Mustache from "mustache";

test('Melakukan Compile', () => { 
    Mustache.parse("hello, {{name}}");

    const data = Mustache.render("hello, {{name}}", { name: "Mustache" });

    expect(data).toBe("hello, Mustache");
 })