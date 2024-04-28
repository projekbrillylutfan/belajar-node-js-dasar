import Mustache from "mustache"

test('Tags', () => { 
    const data = Mustache.render("hello, {{name}}, my hobby is {{{hobby}}}", {
        name: "Mustache",
        hobby: "<b>Programing</b>"
    })

    expect(data).toBe("hello, Mustache, my hobby is <b>Programing</b>")
 })