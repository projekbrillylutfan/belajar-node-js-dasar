import fs from "fs/promises";
import mustache from "mustache";

test('Partials', async () => { 
    const headerTemplate = await fs.readFile("templates/header.mustache", "utf-8")
    .then((data) => data.toString())
    const footerTemplate = await fs.readFile("templates/footer.mustache", "utf-8")
    .then((data) => data.toString())
    const contentTemplate = await fs.readFile("templates/content.mustache", "utf-8")
    .then((data) => data.toString())

    const data = mustache.render(contentTemplate, {
        title: "belajar partials",
        content: "Eko Kurniawan Santoso"
    }, {
        header: headerTemplate,
        footer: footerTemplate
    })

    console.info(data);
    expect(data).toContain("belajar partials")
    expect(data).toContain("Eko Kurniawan Santoso")
    expect(data).toContain("Powered by billy")
 })