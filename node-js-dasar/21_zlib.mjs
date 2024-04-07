import zlib from "zlib"
import fs from "fs"

const source = fs.readFileSync("21_zlib.mjs")
// console.log(source)
const result = zlib.gzipSync(source)

fs.writeFileSync("zlib.mjs.txt", result)