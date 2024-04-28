import fs from "fs/promises";
import mustache from "mustache";

test('Section not show', async () => { 
    const helloTemplate = await fs.readFile("templates/person.mustache", "utf-8")
    .then((data) => data.toString())

    const data = mustache.render(helloTemplate, {
        
    })

    console.info(data);
    expect(data).not.toContain("hello person")
 })

 test('Section show', async () => { 
    const helloTemplate = await fs.readFile("templates/person.mustache", "utf-8")
    .then((data) => data.toString())

    const data = mustache.render(helloTemplate, {
        person: {
            name: "Mustache"
        }
    })

    console.info(data);
    expect(data).toContain("hello person")
 })