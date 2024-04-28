import mustache from "mustache"

test('Functions', async () => { 
    const parameter = {
        name: "Mustache",
        upper: () => {
            return (text, render) => {
                return render(text).toUpperCase()
            }
        }
    }

    const data = mustache.render("Hello, {{#upper}}{{name}}{{/upper}}", parameter)
    expect(data).toBe("Hello, MUSTACHE")
 })