import zlib from "zlib"
import fs from "fs"

const source = fs.readFileSync("zlib.mjs.txt")
const result = zlib.unzipSync(source)

console.log(result.toString())