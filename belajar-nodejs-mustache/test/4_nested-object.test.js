import mustache from "mustache"

test('Nested Object', () => { 
    const data = mustache.render("hello, {{person.name}}", {
        person: {
            name: "Mustache"
        }
    })

    expect(data).toBe("hello, Mustache")
})