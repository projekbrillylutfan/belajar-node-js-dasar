import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("what is your name ? ", (name) => {
    console.log(`hello ${name}`)

    input.close()
})