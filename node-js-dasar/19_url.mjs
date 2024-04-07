import { URL } from "url";

const cemani = new URL("https://www.cnbcindonesia.com/search?query=Full-Stack")

cemani.host = "www.bjircemani.com"
cemani.searchParams.append("ayam", "cemani")

console.log(cemani.toString())
console.log(cemani.protocol)
console.log(cemani.host)
console.log(cemani.pathname)
console.log(cemani.searchParams)