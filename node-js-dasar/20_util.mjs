import util from "util"

console.log(util.format("hello : %s", "ayam"))

const person = {
    name: "ayam",
    age: 20,
}

console.log(util.format("person: %j", person))