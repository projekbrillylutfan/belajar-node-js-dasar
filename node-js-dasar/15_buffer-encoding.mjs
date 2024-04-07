const buffer = Buffer.from("hello")

console.log(buffer.toString("base64"))
console.log(buffer.toString("hex"))

const buffer2 = Buffer.from("sdfsfsfsdsfsdfsdjksdf", "base64url")

console.log(buffer2.toString("utf-8"))