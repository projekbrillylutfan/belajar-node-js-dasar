import fs from "fs"

const writer = fs.createWriteStream("target.log")
writer.write("hello")
writer.write("world")
writer.write("cih ayam")

writer.close()

const reader = fs.createReadStream("target.log")
reader.on("data", (chunk) => {
    console.log(chunk.toString())
    reader.close()
})