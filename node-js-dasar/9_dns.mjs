// import dns from "dns";
import dns from "dns/promises";

// const callback = (err, ip) => {
//     console.log(ip)
// }

// dns.lookup("www.google.com", callback)

const address = await dns.lookup("www.google.com")
console.log(address)