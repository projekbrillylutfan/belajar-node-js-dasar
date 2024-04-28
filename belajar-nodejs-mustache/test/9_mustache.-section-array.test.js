import fs from "fs/promises";
import mustache from "mustache";

test('Inverted Section list array', async () => { 
    const helloTemplate = await fs.readFile("templates/hobby.mustache", "utf-8")
    .then((data) => data.toString())

    const data = mustache.render(helloTemplate, {
        hobby: ["Programing", "Cooking"],
    })

    console.info(data);
    expect(data).toContain("Programing")
 })