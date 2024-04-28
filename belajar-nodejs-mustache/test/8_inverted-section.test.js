import fs from "fs/promises";
import mustache from "mustache";

test('Inverted Section', async () => { 
    const helloTemplate = await fs.readFile("templates/person.mustache", "utf-8")
    .then((data) => data.toString())

    const data = mustache.render(helloTemplate, {
        
    })

    console.info(data);
    expect(data).toContain("hello guest")
 })