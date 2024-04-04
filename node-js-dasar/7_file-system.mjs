import fs from "fs/promises"

const buffer = await fs.readFile("7_file-system.mjs")

console.log(buffer.toString())

await fs.writeFile("7_file-system.txt", "belajar node js dasar")