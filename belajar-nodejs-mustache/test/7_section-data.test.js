import fs from "fs/promises";
import mustache from "mustache";

 test('Section show', async () => { 
    const helloTemplate = await fs.readFile("templates/person.mustache", "utf-8")
    .then((data) => data.toString())

    const data = mustache.render(helloTemplate, {
        person: {
            name: "Mustache"
        }
    })

    console.info(data);
    expect(data).toContain("hello person Mustache")
 })