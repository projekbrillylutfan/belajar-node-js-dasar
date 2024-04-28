import fs from "fs/promises";
import mustache from "mustache";

test('Mustache File', async () => { 
    const helloTemplate = await fs.readFile("templates/hello.mustache", "utf-8")
    .then((data) => data.toString())

    const data = mustache.render(helloTemplate, {
        title: "hello, Mustache"
    })

    console.info(data);
    expect(data).toContain("hello, Mustache")
 })