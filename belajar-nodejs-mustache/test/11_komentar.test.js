import fs from "fs/promises";
import mustache from "mustache";

test('Comment', async () => { 
    const helloTemplate = await fs.readFile("templates/comment.mustache", "utf-8")
    .then((data) => data.toString())

    const data = mustache.render(helloTemplate, {
        title: "hello, Mustache"
    })

    console.info(data);
    expect(data).toContain("hello, Mustache")
    expect(data).not.toContain("ini komentar")
 })