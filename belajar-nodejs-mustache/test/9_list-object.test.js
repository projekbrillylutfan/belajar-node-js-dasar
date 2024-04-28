import fs from "fs/promises";
import mustache from "mustache";

test('Inverted Section list array', async () => { 
    const helloTemplate = await fs.readFile("templates/students.mustache", "utf-8")
    .then((data) => data.toString())

    const data = mustache.render(helloTemplate, {
        students: [
            { name: "Eko", value: 100 },
            { name: "Mustache", value: 100 },
        ]
    })

    console.info(data);
    expect(data).toContain("Eko")
 })